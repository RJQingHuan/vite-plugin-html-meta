# vite-plugin-html-meta

Generate meta tags to html files according to configuration

# Demo

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { htmlMetaPlugin } from 'vite-plugin-html-meta'

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
        workerSrc: ['none'],
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
## output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
		<meta name="viewport" content="width=device-width,height=device-height,initial-scale=0.4" />
		<meta name="Content-Security-Policy" content="default-src 'self';connect-src http://127.0.0.1:9003 ws://localhost:5173 http://47.116.130.135;script-src 'self' 'unsafe-inline';img-src data: https://* blob:;worker-src 'none';report-uri https://www.baidu.com;" />
		<meta name="referrer" content="origin" />
		<meta name="description" content="description" />
		<meta name="keywords" content="HTML,vite,vite-plugin-html-meta" />
		<meta name="author" content="QingHuan" />
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <title>Vite + Vue + TS</title>
    <script type="module" crossorigin src="/assets/index-127f2da4.js"></script>
    <link rel="stylesheet" href="/assets/index-c322ae43.css">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

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