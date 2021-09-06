/*
 * @Descripttion: 验证器
 * @Author: 吻风
 * @Date: 2021-09-04 11:07:59
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-04 11:16:13
 */

import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/zh_CN.json'

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  })
})
