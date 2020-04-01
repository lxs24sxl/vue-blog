import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const context = require.context('./modules', true, /\.js$/)
const keys = context.keys()
const modules = {}

keys.forEach(key => {
  // 忽略 _ 或 $ 开头的文件
  if (!/\/[_$]/.test(key)) {
    const module = context(key).default
    if (module && module.name) {
      modules[module.name] = module
    }
  }
})
console.log('modules', modules, getters)
const store = new Vuex.Store({
  modules,
  getters
})

export default store
