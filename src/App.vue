<!--
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 13:06:14
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-04 19:04:43
-->
<template>
  <div id="app">
    <my-header></my-header>
    <router-view>
    </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    'my-footer': Footer,
    'my-header': Header
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import 'assets/layui/css/layui.css';
@import 'assets/css/global.css';
@import 'assets/layui/css/modules/layer/default/layer.css';
</style>
