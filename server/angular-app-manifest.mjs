
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://RamD446.github.io/RDMnews-/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RDMnews-"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 466, hash: '84fdff888586e30119253043494aef8da01e7d41009f44ec3cbdcd3c1c5af198', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 979, hash: '470550f4f69e80fb5affe1e7bca823dc28383db2c2d20c64b4115e7ff5b9d18f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20805, hash: 'b6d544faf98926871023bf447d7150a8954663f91d3c0b4579e73b96ea617e67', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
