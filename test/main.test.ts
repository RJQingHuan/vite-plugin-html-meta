import { EOL } from 'node:os'
import { expect, test } from 'vitest'
import { camelCase2KebabCase, insertStr } from '../src/util'
import { transformCSP, transformKeywords, transformStringContent, transformViewport } from '../src/transform'
import type { CSP, Viewport } from '../src/type'

test('camelCase2KebabCase', () => {
  const initialScale = camelCase2KebabCase('initialScale')
  expect(initialScale).toBe('initial-scale')
})

test('insertStr', () => {
  const originStr = '<head></head>'
  const newStr = insertStr(originStr, 6, '<meta name="t">')
  expect(newStr).toBe('<head><meta name="t"></head>')
})

test('transformStringContent', () => {
  const referrer = transformStringContent('referrer', 'origin')
  expect(referrer).toBe(`${EOL}<meta name="referrer" content="origin" />`)
  const description = transformStringContent('description', 'Generate meta tags to html files according to configuration')
  expect(description).toBe(`${EOL}<meta name="description" content="Generate meta tags to html files according to configuration" />`)
  const author = transformStringContent('author', 'QingHuan')
  expect(author).toBe(`${EOL}<meta name="author" content="QingHuan" />`)
})

test('transformKeywords', () => {
  expect(transformKeywords(['html', 'meta', 'vite-plugin']))
    .toBe(`${EOL}<meta name="keywords" content="html,meta,vite-plugin" />`)
})

test('transformViewport', () => {
  const viewport: Viewport = {
    width: 'device-width',
    height: 'device-height',
    initialScale: 5.5,
    minimumScale: 4,
    maximumScale: 3,
    userScalable: 1,
    interactiveWidget: 'resizes-content',
    interactiveSidget: 'resizes-visual',
  }
  const result = `${EOL}<meta name="viewport" content="width=device-width,height=device-height,initial-scale=5.5,minimum-scale=4,maximum-scale=3,user-scalable=1,interactive-widget=resizes-content,interactive-sidget=resizes-visual" />`
  expect(transformViewport(viewport)).toBe(result)
})

test('transformCSP', () => {
  const csp: CSP = {
    defaultSrc: ['self'],
    connectSrc: ['http://127.0.0.1:9003', 'ws://localhost:5173'],
    reportUri: 'https://www.baidu.com',
  }
  expect(transformCSP(csp))
    .toBe(`${EOL}<meta http-equiv="Content-Security-Policy" content="default-src 'self';connect-src http://127.0.0.1:9003 ws://localhost:5173;report-uri https://www.baidu.com;" />`)
})
