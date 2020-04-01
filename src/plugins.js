/**
 * 全局注册 components 目录下所有的组件，忽略 _ 或 $ 开头的文件或文件夹
 * 组件必须有 name 属性
 */
const components = {
  // eslint-disable-next-line no-unused-vars
  install (Vue, options) {
    const context = require.context('./components', true, /\.vue$/)
    const keys = context.keys()
    keys.forEach(key => {
      if (!/\/[_$]/.test(key)) {
        const component = context(key).default
        const name = (component.extendOptions
          ? component.extendOptions.name
          : component.name || ''
        ).trim()
        name && Vue.component(name, component)
      }
    })
  }
}

/**
 * 全局注册 directive 目录下所有的组件，忽略 _ 或 $ 开头的文件或文件夹
 * 组件必须有 name 属性
 */
const directives = {
  // eslint-disable-next-line no-unused-vars
  install (Vue, options) {
    const context = require.context('./directives', true, /\.js$/)
    const keys = context.keys()
    keys.forEach(key => {
      if (!/\/[_$]/.test(key)) {
        const directive = context(key).default
        const name = (directive.extendOptions
          ? directive.extendOptions.name
          : directive.name || ''
        ).trim()
        name && Vue.directive(name, directive.directive)
      }
    })
  }
}

export default {
  components,
  directives
}
