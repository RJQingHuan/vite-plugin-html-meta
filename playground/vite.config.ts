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
      description: '不包含内容，属性定义了与文档相关的键值对，不会显示在页面上，但对于机器是可读的。通常情况下，meta 元素被用于规定页面的描述、关键字',
      keywords: ['HTML', 'web 标准', '开发文档'],
      author: '张三',
    }),
  ],
})
