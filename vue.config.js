const path = require('path')

const {
  OUTPUT_DIR,
  ASSETS_DIR,
  FILENAME_HASHING,
  PRODUCTION_SOURCE_MAP,
  VUE_APP_PUBLIC_PATH,
  PORT
} = process.env

function resolve (dir) {
  return path.join(__dirname, dir)
}

function convertnNumStrToBool (numStr) {
  return !!+numStr
}
module.exports = {
  publicPath: VUE_APP_PUBLIC_PATH || '',

  // 打包后文件目录
  outputDir: OUTPUT_DIR,

  // 打包后静态文件目录
  assetsDir: ASSETS_DIR,

  // 打包后静态文件名是否包含哈希值
  filenameHashing: convertnNumStrToBool(FILENAME_HASHING),

  // source map
  productionSourceMap: convertnNumStrToBool(PRODUCTION_SOURCE_MAP),

  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.module
      .rule('js')
      .test(/\.js$/)
      .include.add(path.resolve(__dirname, 'src'))
      .add(require.resolve('bootstrap-vue'))
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end()
  },

  configureWebpack: () => {
    const plugins = []

    if (process.env.BUNDLER_ANALYZER) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
      plugins.push(new BundleAnalyzerPlugin())
    }

    return {
      optimization: {
        runtimeChunk:
          process.env.NODE_ENV === 'production' ? { name: 'manifest' } : false,
        splitChunks: {
          automaticNameDelimiter: '--',
          cacheGroups: {
            vendors: {
              name: 'vendors',
              chunks: 'initial',
              test: /[\\/]node_modules[\\/]/,
              priority: 2,
              minChunks: 2
            },
            'element-ui': {
              name: 'element-ui',
              test: module => /element-ui/g.test(module.context),
              chunks: 'initial',
              priority: 10
            },
            vue: {
              name: 'vue-common',
              test: module => /vue|axios/g.test(module.context),
              chunks: 'initial',
              priority: 8
            },
            echarts: {
              name: 'echarts',
              test: module => /echarts|zrender|v-charts/g.test(module.context),
              chunks: 'initial',
              priority: 9
            }
          }
        }
      },

      plugins: [...plugins],

      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': 'src',
          src: resolve('src'),
          assets: resolve('src/assets'),
          config: resolve('src/config'),
          utils: resolve('src/utils')
        }
      }
    }
  },

  devServer: {
    port: PORT,
    https: false,
    proxy: {
      '/api': {
        // target: 'https://lxs24sxl.cn/api',
        target: 'https://lxs24sxl.cn/api',
        changeOrigin: true,
        secure: false,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
