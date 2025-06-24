
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RDMnews/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RDMnews"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 475, hash: 'facd7f4830bb1190ca6c6e2b2b87bb975125ac973faaf66c219b0cc5254860a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 988, hash: '26480e4ff4d6795e7f6b54451d121701fd20f560b24e8037646c7d397580a131', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20814, hash: 'ad20a09e6c6e096cd0cb693539bd2e00e39f5bc7d3d642dad105d7f895179e16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
