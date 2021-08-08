/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 22:54:21
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-08 12:24:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV !== 'prod' ? 'http://localhost:3000' : 'http://your.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
