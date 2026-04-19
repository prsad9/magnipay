import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

function ensureDeclarationSourceFrom() {
  return {
    postcssPlugin: "ensure-declaration-source-from",
    Once(root, { result }) {
      const fallbackFrom = result.opts.from || root.source?.input?.file;

      if (!fallbackFrom) {
        return;
      }

      root.walkDecls((decl) => {
        if (decl.source?.input?.file) {
          return;
        }

        decl.source = decl.source || {};
        decl.source.input = decl.source.input || {};
        decl.source.input.file = fallbackFrom;
      });
    },
  };
}

ensureDeclarationSourceFrom.postcss = true;

export default {
  plugins: [tailwindcss(), autoprefixer(), ensureDeclarationSourceFrom()],
};
