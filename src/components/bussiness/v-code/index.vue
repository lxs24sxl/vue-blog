<template>
  <div :class="`language-${type}`">
    <pre :class="`language-${type}`">
      <code v-html="code"></code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'VCode',

  props: ['contents', 'type'],

  computed: {
    code () {
      return this.strTrim(this.contents)
    }
  },

  methods: {
    strTrim (str) {
      let space = ''
      let type = 'other'
      console.log(str.split('\n'))
      // 遍历数组
      let codeArr = str.split('\n').map(item => {
        // 获取清除前后空格的值
        let oItem = item.replace(/(^\s*)|(\s*$)/g, '')
        // 获取最后一个值
        let lastWord = oItem.slice(-1)
        // 判断类型 => { or [ 为前, } or ] 为后，其余为默认
        type = /(\[|\{)/.test(lastWord)
          ? 'before'
          : /(\]|\})/.test(lastWord)
            ? 'after'
            : 'other'
        // 当为 '前' 类型时，先输出数据，后加空格， 当为 '后' 类型时，先清除空格，后输出数据
        switch (type) {
          case 'before':
            oItem = space + oItem
            space += '  '
            break
          case 'after':
            space = space.slice(2)
            oItem = space + oItem
            break
          default:
            oItem = space + oItem
            break
        }
        return oItem
      })
      if (codeArr[0] !== '') codeArr.splice(0, 0, '')
      if (codeArr[codeArr.length - 1] === '') codeArr.pop()
      console.log(codeArr.join('\n'))
      return codeArr.join('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
div[class*="language-"] {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
}
div[class*="language-"] pre,
div[class*="language-"] pre[class*="language-"] {
  background: transparent;
  position: relative;
  z-index: 1;
}
div[class*="language-"]:before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: hsla(0, 0%, 100%, 0.4);
}
div[class~="language-js"]:before {
  content: "js";
}
div[class~="language-html"]:before {
  content: "html";
}
div[class~="language-css"]:before {
  content: "css";
}
pre[class*="language-"] code,
pre code {
  color: #fff;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}
pre[class*="language-"] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
}
</style>
