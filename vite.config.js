import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@ions": fileURLToPath(new URL("./src/components/ions", import.meta.url)),
      "@atoms": fileURLToPath(
        new URL("./src/components/atoms", import.meta.url)
      ),
      "@molecules": fileURLToPath(
        new URL("./src/components/molecules", import.meta.url)
      ),
      "@organisms": fileURLToPath(
        new URL("./src/components/organisms", import.meta.url)
      ),
      "@styles": fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
      "@db": fileURLToPath(new URL("./src/db", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/index.scss";',
      },
    },
  },
});
