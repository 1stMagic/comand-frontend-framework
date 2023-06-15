import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "comand-frontend-framework",
      fileName: "comand-frontend-framework"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
