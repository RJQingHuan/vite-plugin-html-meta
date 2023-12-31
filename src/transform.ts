import { EOL } from 'node:os'
import type { CSP, Viewport } from './type'
import { camelCase2KebabCase } from './util'

export function transformStringContent(name: string, content: string) {
  return `${EOL}<meta name="${name}" content="${content}" />`
}

export function transformViewport(viewport: Viewport) {
  const content = Array.from(new Map(Object.entries(viewport)))
    .map(([k, v]) => `${camelCase2KebabCase(k)}=${v}`)
    .join(',')
  return transformStringContent('viewport', content)
}

export function transformCSP(csp: CSP) {
  const content = Array.from(new Map(Object.entries(csp)))
    .map(([k, v]) => {
      if (Array.isArray(v))
        v = v.join(' ')
      return `${camelCase2KebabCase(k)} ${v};`
    })
    .join('')
  const formatterReg = /(self|unsafe-inline|unsafe-eval|none)/ig
  return `${EOL}<meta http-equiv="Content-Security-Policy" content="${content.replaceAll(formatterReg, '\'$1\'')}" />`
}

export function transformKeywords(keywords: Array<string>) {
  return transformStringContent('keywords', keywords.join(','))
}
