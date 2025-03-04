
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://akshayramteke97.github.io/my-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-website"
  },
  {
    "renderMode": 2,
    "route": "/my-website/about"
  },
  {
    "renderMode": 2,
    "route": "/my-website/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-website/blog"
  },
  {
    "renderMode": 2,
    "route": "/my-website/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-website",
    "route": "/my-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: 'f1d128cf41abddccdf72ef3383705c1ece6e9e5b1cc7bb136ef93bb7377b9845', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '682fdc2bc294c8ce179fee0ae29edde36ddb071048a4b86844a546352effcc39', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 988, hash: '1dac0b0158b50c12175126fcb9af6907cf061101d2cd1516e6c775a63da2df26', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 994, hash: '06e337ffd4fb5a99465e6d0dc1ef470cc0b07eac9dd84e23bfe41297e3c225ca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 1000, hash: '90c3f4101db0ce595683b563322a7ba5a6c6269e3604549dae8643ebe89dee0b', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 982, hash: '3b92019ca8189d4dc7324870861333e08d9dc5319970d21717293c38708aa98e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 1359, hash: '55a0670a8309588d2b17d7d8ebdaaa2f4a481abdbb0d2a0bb957d379f382b10a', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
