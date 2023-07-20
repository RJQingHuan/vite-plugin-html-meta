import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { htmlMetaPlugin } from '../dist/index'

export default defineConfig({
  plugins: [
    vue(),
    htmlMetaPlugin({
      viewport: {
        width: 'device-width',
        height: 'device-height',
        initialScale: 0.4,
      },
      csp: {
        defaultSrc: ['self'],
        connectSrc: ['http://127.0.0.1:9003', 'ws://localhost:5173', 'http://47.116.130.135'],
        scriptSrc: ['self', 'unsafe-inline'],
        imgSrc: ['data:', 'https://*', 'blob:'],
        reportUri: 'https://www.baidu.com',
      },
      referrer: 'origin',
      description: 'description',
      keywords: ['HTML', 'vite', 'vite-plugin-html-meta'],
      author: 'QingHuan',
    }),
  ],
})
