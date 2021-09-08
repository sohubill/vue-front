/*
 * @Descripttion: 验证器
 * @Author: 吻风
 * @Date: 2021-09-04 11:07:59
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-07 11:23:46
 */

import { extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/zh_CN.json'

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule] // copies rule configuration
    // message: messages[rule] // assign message
  })
})

localize({
  zh_CN: {
    names: {
      email: '邮箱',
      password: '密码',
      name: '昵称',
      username: '用户名',
      code: '验证码',
      repassword: '重复密码'
    },
    messages: {
      ...messages,
      confirmed: '两次输入不一致'
    }
  }
})
localize('zh_CN')
