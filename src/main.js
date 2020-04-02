import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import Nav from 'bootstrap-vue/es/components/nav'
import Navbar from 'bootstrap-vue/es/components/navbar'
import plugins from './plugins'

import 'assets/iconfont/iconfont.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'assets/scss/common.scss'
import 'assets/scss/reset.scss'

Vue.use(plugins.components)
Vue.use(Navbar)
Vue.use(Nav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
