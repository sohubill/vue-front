/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 13:06:14
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-06 22:38:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName:'login' */'@/views/Login.vue')
const Reg = () => import(/* webpackChunkName:'login' */'@/views/Reg.vue')
const Forget = () => import(/* webpackChunkName:'login' */'@/views/Forget.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes: routes
})

export default router
