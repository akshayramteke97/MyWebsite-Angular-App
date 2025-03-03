
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://akshayramteke97.github.io/MyWebsite-Angular-App/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyWebsite-Angular-App"
  },
  {
    "renderMode": 2,
    "route": "/MyWebsite-Angular-App/about"
  },
  {
    "renderMode": 2,
    "route": "/MyWebsite-Angular-App/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/MyWebsite-Angular-App/blog"
  },
  {
    "renderMode": 2,
    "route": "/MyWebsite-Angular-App/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/MyWebsite-Angular-App",
    "route": "/MyWebsite-Angular-App/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: '51023f36b686941ba832b7bdc0bb13c6494a0a478212831fbafff3cc867b02a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'c8a02e295281d9145e587adad082dd6e4c858a9b4534212745d47264ea81c68e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 999, hash: 'e314c6283764e131ef18ea816b6c1e51359e5fbddd1f5dbe5c8fcae7496ea018', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 1005, hash: '3fba93f22a51d437e8ad840a07cdeaebf038dbe7220b66bdeb05cfa9bad332b6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 1011, hash: '8c5f54b2db1134800323a8e58ba618d54ea1dbc4a4c881aa92fe94e6966375ab', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 993, hash: '1698c5abd580d6e1c7754dc20b2060288f1fe6a8a69def6a3af26b5453d62bf9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 1350, hash: '71c51aeedac4b6aa8791c47e20af22bacb53046f05a19f7ff77f9a0a473612b0', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
