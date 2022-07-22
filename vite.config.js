import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import path from 'path'

export default defineConfig({
  base: './',
  server: {
    open: true,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    jsx(),
    legacy({ targets: ['ie >=11', 'chrome >= 49'] }),
    Unocss({
      presets: [presetAttributify({}), presetUno()],
    }),
  ],
})
