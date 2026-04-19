import postcss from "postcss";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const instances = [];
instances.push({ name: "root-postcss", mod: postcss });

try {
  const vitePostcss = require("../node_modules/vite/node_modules/postcss");
  instances.push({ name: "vite-postcss", mod: vitePostcss });
} catch {
  // ignore missing nested copy
}

for (const instance of instances) {
  const originalParse = instance.mod.parse;
  let count = 0;

  instance.mod.parse = function patchedParse(css, opts) {
    if (!opts || opts.from === undefined) {
      count += 1;
      if (count <= 20) {
        console.error(`\n[${instance.name}] parse missing from #${count}`);
        console.error(new Error().stack);
      }
    }
    return originalParse.call(this, css, opts);
  };

  instance.countRef = () => count;
}

const vite = await import("vite");
await vite.build();

for (const instance of instances) {
  console.error(`[${instance.name}] total missing from: ${instance.countRef()}`);
}
