// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用vuex状态管理工具
import Vuex from 'vuex';
Vue.use(Vuex);
import storeObj from '@/store/index';

let store = new Vuex.Store(storeObj);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
