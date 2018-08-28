const path = require('path');
let WebpackParalledUglifyPlugin = require('webpack-parallel-uglify-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // For example, if your app is deployed at https://foobar.com/vue-blog set baseUrl to '/vue-blog/'
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
    config.module
      .rule('js')
      .test(/\.js$/)
      .include.add(path.resolve(__dirname, 'src'))
      .add(require.resolve('bootstrap-vue'))
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end();
  },
  productionSourceMap: false, // 清除生产环境中的source map
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 1234,
    https: false,
    hotOnly: false,
    proxy: null,
    inline: true
    // before: app => {}
  },
  configureWebpack: {
    plugins: [
      new WebpackParalledUglifyPlugin({
        uglifyJS: {
          output: {
            comments: true //不保留注释
          },
          compress: {
            warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
            drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
            collapse_vars: true, // 内嵌定义了但是只用到一次的变量
            reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
          }
        }
      }),
      new BundleAnalyzerPlugin()
    ]
  }
};
