<!--
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 13:06:14
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-06 22:35:18
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
import axios from 'axios'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  mounted () {
    this.getCaptcha()
  },
  components: {
    'my-footer': Footer,
    'my-header': Header
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.msg
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import 'assets/layui/css/layui.css';
@import 'assets/css/global.css';
@import 'assets/layui/css/modules/layer/default/layer.css';
</style>
