<!--
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-06 21:50:07
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-07 11:59:20
-->
<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <validation-observer ref="observer">
                <form method="post">
                  <div class="layui-form-item">
                    <validation-provider
                      rules="required|email"
                      v-slot="{ errors }"
                    >
                      <label class="layui-form-label">用户名</label>
                      <div class="layui-input-inline" >
                        <input
                          type="text"
                          name="username"
                          v-model="username"
                          placeholder="请输入用户名"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <validation-provider
                      rules="required|min:5"
                      v-slot="{ errors }"
                    >
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="密码"
                          v-model="password"
                          placeholder="请输入密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <validation-provider
                    rules="required|length:4"
                    v-slot="{ errors }"
                    ref='code'
                  >
                    <div class="layui-form-item">
                      <div class="layui-row">
                        <label for="L_vercode" class="layui-form-label"
                          >验证码</label
                        >
                        <div class="layui-input-inline">
                          <input
                            type="text"
                            name="验证码"
                            v-model="code"
                            placeholder="请输入验证码"
                            autocomplete="off"
                            class="layui-input"
                          />
                        </div>
                        <div class>
                          <span
                            class="svg"
                            style="color: #c00"
                            @click="_getCode()"
                            v-html="svg"
                          >
                          </span>
                        </div>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors[0] }}</span>
                      </div>
                    </div>
                  </validation-provider>
                  <div class="layui-form-item">
                    <button class="layui-btn" type="button" @click="submit">立即登录</button>
                    <span style="padding-left: 20px">
                      <router-link :to="{ name: 'forget' }"
                        >忘记密码？</router-link
                      >
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a
                      href
                      onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-qq"
                      title="QQ登入"
                    ></a>
                    <a
                      href
                      onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-weibo"
                      title="微博登入"
                    ></a>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { getCode, login } from '@/api/login.js'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    window.vue = this
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuidv4()
    }
    localStorage.setItem('sid', sid)
    this.$store.commit('setSid', sid)
    this._getCode()
  },
  methods: {
    _getCode () {
      var sid = this.$store.state.sid
      getCode(sid).then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    submit () {
      this.$refs.observer.validate().then(valid => {
        if (valid) {
          login({
            username: this.username,
            password: this.password,
            code: this.code,
            sid: this.$store.state.sid
          }).then(res => {
            if (res.code === 200) {
              this.username = ''
              this.password = ''
              this.code = ''
              requestAnimationFrame(() => {
                this.$refs.observer.reset()
              })
            } else if (res.code === 1000) {
              this.$refs.code.setErrors([res.msg])
            } else {
              this.$alert(res.msg)
            }
            this._getCode()
          }).catch(err => {
            console.log(err.response.data)
            // const data = err.response.data
            // this.$alert(data.msg)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// 公用样式可以放在App.vue中
</style>
