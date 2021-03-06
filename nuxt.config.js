const bodyParser = require('body-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Server Middleware (express)
  */
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],
  /*
  ** Router config
  */
  router: {
    middleware: 'check-auth'
  },
  /*
  ** Build configuration
  */
  plugins: [],
  modules: [
    '@nuxtjs/font-awesome'
  ],
  css: [
    { src: '~/assets/bulma.sass', lang: 'sass' }, 
    'bulma'
  ],
  build: {
    vendor: [
      'axios',
    ],
    postcss: {
      plugins: {
        // prevent compile warnings from bulma
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
