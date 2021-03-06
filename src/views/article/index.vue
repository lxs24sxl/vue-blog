<template>
  <div class="container">
    <article class="article-wrapper left">
      <div class="article-header">
        <h1>使用Webpack</h1>
        <h2>简单配置</h2>
        <p>
          调整webpack配置的最简单方法是在以下
          <code>configureWebpack</code>
          选项中提供一个对象
          <code>vue.config.js</code>
          :
        </p>
        <v-code type="css"
                :contents="contents"></v-code>
        <p>
          该对象将使用
          <a href="#"
             target="_blank"
             title="webpack-merge">webpack-merge</a>
          合并到最终的webpack配置中。
        </p>
        <v-block :block="block"></v-block>
        <p>如果您需要基于环境的条件行为，或者想要直接改变配置，请使用一个函数（在设置env变量后将对其进行惰性求值）。该函数接收已解析的配置作为参数。在函数内部，您可以直接改变配置，或者返回一个将被合并的对象：</p>
        <v-code type="js"
                :contents="contents2"></v-code>
        <h2>链接(高级)</h2>
        <v-block :block="block2"></v-block>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerInfo: {
        title: '',
        subTitle: '',
        bgImg: '',
        isShowBanner: false,
        size: 'normal'
      },
      contents: `
        // vue.config.js
        module.exports = {
          configureWebpack: {
            plugins: [
              new MyAwesomeWebpackPlugin()
            ]
          }
        }
      `,
      contents2: `
        // vue.config.js
        module.exports = {
          configureWebpack: config => {
            if ( process.env.NODE_ENV === 'production' ) {
              // mutate config for production...
            } else {
              // mutate for developments...
            }
          }
        }
      `,
      block: {
        type: 'warning',
        title: '警告',
        content: `
        某些webpack选项是根据值设置的
        <code>vue.config.js</code>
        ，不应直接进行变异。例如
        <code>output.path</code>
        您应该使用
        <code>outputDir</code>
        选项in 而不是修改
        <code>vue.config.js</code>
        ; 而不是修改
        <code>output.publicPath</code>
        ，你应该使用
        <code>baseUrl</code>
        选项
        <code>vue.config.js</code>
        。这是因为值
        <code>vue.config.js</code>
        将在配置内的多个位置使用，以确保一切正常工作。`
      },
      block2: {
        type: 'tip',
        title: '提示',
        content: `
          某些webpack选项是根据值设置的
          <code>vue.config.js</code>
          ，不应直接进行变异。例如
          <code>output.path</code>
          您应该使用
          <code>outputDir</code>
          选项in 而不是修改
          <code>vue.config.js</code>
          ; 而不是修改
          <code>output.publicPath</code>
          ，你应该使用
          <code>baseUrl</code>
          选项
          <code>vue.config.js</code>
          。这是因为值
          <code>vue.config.js</code>
          将在配置内的多个位置使用，以确保一切正常工作。`
      }
    }
  },

  created () {
    this.$store.commit('TOGGLE_BANNER', this.bannerInfo)
  }
}
</script>

<style lang="scss">
.article {
  &-wrapper {
    margin-top: 10px;
    padding: 10px 10px;
    max-width: 850px;
    background-color: #fff;
    code {
      color: #476582;
      padding: 0.25rem 0.5rem;
      margin: 0;
      font-size: 0.85em;
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
    }
  }
}
p a,
p a code {
  color: #3eaf7c !important;
  font-weight: 600 !important;
}
</style>

<style lang="scss" scoped>
h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.line-number,
code,
kbd {
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
</style>
