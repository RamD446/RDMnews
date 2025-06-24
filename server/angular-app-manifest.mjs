
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RDMnews-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RDMnews-"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 441, hash: 'ab688587e4e0c6bb6e11966665b51a0d44a34e8707946c98c92d5ded0e470b37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'bf71810934d8c1648d365c4955d8206cc527c6a9580552a200227cb134ffcd37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20780, hash: '1ca5b5938dcdfe7117b8d9c762e84a97ff96c2d9f207d23436739b532d5df1c9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
