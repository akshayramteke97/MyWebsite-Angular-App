
export default {
  basePath: 'https://akshayramteke97.github.io/MyWebsite-Angular-App',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
