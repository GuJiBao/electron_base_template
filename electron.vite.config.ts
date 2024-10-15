import { resolve } from 'path'
import { defineConfig, swcPlugin, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [swcPlugin(), externalizeDepsPlugin()]
  },
  preload: {
    plugins: [swcPlugin(), externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      }
    },
    plugins: [vue()]
  }
})
