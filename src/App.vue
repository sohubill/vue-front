<!--
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-02 13:06:14
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-03 00:13:53
-->
<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" :class="{'form-group--error':$v.account.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="requied"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              v-model.trim="model"
              @blur="setAccount($event.target.value)"
            />
            <div class="error layui-form-mid" v-if="!$v.account.required">用户名不得为空</div>
            <div class="error layui-form-mid" v-if="!$v.account.email">用户名必须是邮箱</div>
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
import { required, email } from 'vuelidate/lib/validators'
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
  validations: {
    account: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
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
    setAccount (value) {
      console.log(value)
      this.account = value
      this.$v.account.$touch()
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
.error{
  display: none;
}
.form-group--error{
  .error{
    display: block;
  }
}
</style>
