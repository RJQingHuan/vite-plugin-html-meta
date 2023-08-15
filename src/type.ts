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
  frameSrc?: Array<string>
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
