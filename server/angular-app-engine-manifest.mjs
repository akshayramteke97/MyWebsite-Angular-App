
export default {
  basePath: 'https://akshayramteke97.github.io/my-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
