
export default {
  basePath: 'https://RamD446.github.io/RDMnews-',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
