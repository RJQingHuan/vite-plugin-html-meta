import type { Plugin } from 'vite'
import { insertStr } from './util'
import type { htmlMetaOptions } from './type'
import { transformCSP, transformKeywords, transformStringContent, transformViewport } from './transform'

export function htmlMetaPlugin(opt: htmlMetaOptions): Plugin {
  return {
    name: 'vite:htmlMeta',
    transformIndexHtml(html) {
      const viewport = opt.viewport ? transformViewport(opt.viewport) : ''
      const csp = opt.csp ? transformCSP(opt.csp) : ''
      const referrer = opt.referrer ? transformStringContent('referrer', opt.referrer) : ''
      const description = opt.description ? transformStringContent('description', opt.description) : ''
      const keywords = opt.keywords ? transformKeywords(opt.keywords) : ''
      const author = opt.author ? transformStringContent('author', opt.author) : ''

      const headIndex = html.indexOf('<head>') + 6
      html = insertStr(html, headIndex, viewport + csp + referrer + description + keywords + author)
      return html
    },
  }
}
