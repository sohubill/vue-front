/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 22:54:21
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-04 12:00:13
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/veeValidate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
