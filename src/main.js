/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 22:54:21
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-06 13:53:08
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/veeValidate'
import Alert from '@/components/common/alert'

Vue.use(Alert)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
