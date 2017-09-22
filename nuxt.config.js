module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hot-frontend-news',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'hot frontend news. 前端头条' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff9900', height: '8px' },
  /*
  ** Build configuration
  */
  build: {
    // 页面过渡效果
    transition: {
      name: 'page',
      mode: 'out-in',
      beforeEnter (el) {
        console.log('Before enter...')
      }
    },
    // true的时候，开启打包文件分析器，运行为： npm run analyze
    analyze: false,
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.devtool = 'eval-source-map'
      }
    },

    /**
     * 使用三方包，防止重复打包
     */
    vendor: ['axios', 'vue-notifications', 'iview']
  },

  /**
   * 使用插件
   */
  plugins: [
    { src: '~plugins/iview', ssr: true },
    { src: '~plugins/vue-notifications', ssr: false },
    { src: '~plugins/axios', ssr: true }
  ],

  // 开启组件缓存
  cache: {
    max: 1000,
    maxAge: 900000
  },

  css: [
    { src: '~assets/common/style.less', lang: 'less' }
  ],

  // 定义运行环境变量
  env: {
    baseUrl: process.env.BASE_URL || 'http://local.smartstudy.com/api/'
  }
}
