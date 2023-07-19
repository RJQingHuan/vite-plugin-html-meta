# Demo

```typescript
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

```

# Type Declarations
```typescript
type Interactive = 'resizes-visual' | 'resizes-content' | 'overlays-content'

export interface Viewport {
  width?: string
  height?: string
  initialScale?: number
  minimumScale?: number
  maximumScale?: number
  userScalable?: 0 | 1 | 'yes' | 'no'
  viewportFit?: 'auto' | 'contain' | 'cover'
  interactiveSidget?: Interactive
  interactiveWidget?: Interactive
}

export interface CSP {
  defaultSrc?: Array<string>
  scriptSrc?: Array<string>
  styleSrc?: Array<string>
  imgSrc?: Array<string>
  mediaSrc?: Array<string>
  fontSrc?: Array<string>
  objectSrc?: Array<string>
  childSrc?: Array<string>
  connectSrc?: Array<string>
  workerSrc?: Array<string>
  manifestSrc?: Array<string>
  baseUri?: Array<string>
  frameAncestors?: Array<string>
  formAction?: Array<string>
  reportUri?: string
}

export type Referrer =
  'no-referrer' |
  'origin' |
  'no-referrer-when-downgrade' |
  'origin-when-cross-origin' |
  'same-origin' |
  'strict-origin' |
  'strict-origin-when-cross-origin' |
  'unsafe-URL'

export interface htmlMetaOptions {
  viewport?: Viewport
  csp?: CSP
  referrer?: Referrer
  description?: string
  keywords?: Array<string>
  author?: string
}
```