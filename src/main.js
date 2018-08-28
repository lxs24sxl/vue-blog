import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';

import Nav from 'bootstrap-vue/es/components/nav';
import Navbar from 'bootstrap-vue/es/components/navbar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './styles/common.scss';
import './styles/reset.scss';

Vue.use(Navbar);
Vue.use(Nav);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
