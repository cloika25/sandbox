import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint2";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sandbox/",
  plugins: [
    react(),
    eslint({
      emitWarning: true,
    }),
  ],
});
