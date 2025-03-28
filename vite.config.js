import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path"; // Import path module

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "date-fns": path.resolve("node_modules/date-fns/esm"), // Force Vite to use ESM version
    },
  },
});
