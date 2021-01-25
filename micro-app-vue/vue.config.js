module.exports = {
  devServer: {
    port: 7777,
    disableHostCheck: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath: process.env.VUE_APP_VUE_MICRO_APP
  },
  configureWebpack: {
    output: {
      library: 'VueMicroApp',
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonp_VueMicroApp'
    }
  }
};