import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
