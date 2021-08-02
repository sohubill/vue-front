<!--
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 13:06:14
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-02 17:51:47
-->
<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="requied"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              v-model="name"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="requied"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
              v-model="password"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="requied"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
              v-model="code"
            />
          </div>
           <div v-html="svg" class="layui-form-mid svg" @click="getCaptcha"></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登录</button>
        <a class="custom-link" href="http://www.layui.com">找回密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      account: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  mounted () {
    this.getCaptcha()
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
    },
    checkForm () {
      this.errorMsg = []
      if (!this.account) {
        this.errorMsg.push('登录名为空！')
      }
      if (!this.password) {
        this.errorMsg.push('密码为空！！')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 200px;
}
.custom-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.svg{
  position: relative;
  top: -9px;
  left: 2px;
}
</style>
