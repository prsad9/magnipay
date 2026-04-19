import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const targets = [
  {
    file: path.join(root, "node_modules", "tailwindcss", "lib", "corePlugins.js"),
    replacers: [
      {
        from: '_postcss.default.parse(_fs.default.readFileSync(_path.join(__dirname, "./css/preflight.css"), "utf8"));',
        to: '_postcss.default.parse(_fs.default.readFileSync(_path.join(__dirname, "./css/preflight.css"), "utf8"), { from: _path.join(__dirname, "./css/preflight.css") });',
      },
    ],
  },
  {
    file: path.join(root, "node_modules", "tailwindcss", "lib", "lib", "generateRules.js"),
    replacers: [
      {
        from: '_postcss.default.parse(`a{${property}:${value}}`).toResult();',
        to: '_postcss.default.parse(`a{${property}:${value}}`, { from: "tailwindcss://generateRules" }).toResult();',
      },
    ],
  },
];

let patchedCount = 0;

for (const target of targets) {
  if (!fs.existsSync(target.file)) {
    continue;
  }

  let content = fs.readFileSync(target.file, "utf8");
  let changed = false;

  for (const replacer of target.replacers) {
    if (content.includes(replacer.to)) {
      continue;
    }

    if (content.includes(replacer.from)) {
      content = content.replace(replacer.from, replacer.to);
      changed = true;
      patchedCount += 1;
    }
  }

  if (changed) {
    fs.writeFileSync(target.file, content, "utf8");
  }
}

if (patchedCount > 0) {
  console.log(`[patch-tailwind-postcss-from] Applied ${patchedCount} patch(es).`);
} else {
  console.log("[patch-tailwind-postcss-from] Nothing to patch (already applied or files not found).");
}
