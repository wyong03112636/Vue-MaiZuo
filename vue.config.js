const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('components', path.resolve(__dirname, './src/components'))
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('pages', path.resolve(__dirname, './src/pages'))
      .set('utils', path.resolve(__dirname, './src/utils'))
      .set('filters', path.resolve(__dirname, './src/filters'))
  },
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
      },
      '/dianying': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    },
  }
}