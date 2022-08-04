import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import ElementPlus from "unplugin-element-plus/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

const Components = require("unplugin-vue-components/vite");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // 自动引入使用到的element组件
    ElementPlus({
      useSource: true,
    }),
    // 自动导入 Vite、Webpack、Rollup 和 esbuild 的 API
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入和注册组件，无需手动引入element plus组件
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
      "#/": `${resolve(__dirname, "types")}/`,
      "views/": `${resolve(__dirname, "src/views")}/`,
      "utils/": `${resolve(__dirname, "src/utils")}/`,
      "styles/": `${resolve(__dirname, "src/styles")}/`,
      "store/": `${resolve(__dirname, "src/store")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
});
