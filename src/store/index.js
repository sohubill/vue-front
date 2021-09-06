/*
 * @Descripttion: store
 * @Author: 吻风
 * @Date: 2021-08-02 22:54:21
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-04 21:08:47
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: ''
  },
  mutations: {
    setSid (state, sid) {
      state.sid = sid
    }
  },
  actions: {
  },
  modules: {
  }
})
