const vuxLoader = require('vux-loader')
const CompressPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: './',
  lintOnSave: false,
  devServer: {
    proxy: {
     /* '/api': {
        ws: false,
        target: 'http://rigel-server.astystore.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },*/
      '/': {
          ws: false,
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
              '^/': '/'
          }
      },
    },
    port: 8090
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV == 'production') {
      return {
        plugins: [
          new CompressPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }
    // vuxLoader.merge(config, {
    //   plugins: ['vux-ui', 'duplicate-style']
    // })
  }
}
