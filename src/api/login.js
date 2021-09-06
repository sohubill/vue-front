/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-08 12:07:46
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-05 22:11:18
 */
import request from '@/utils/request.js'

const getCode = (sid) => {
  return request.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

const forget = (option) => {
  return request.post('/forget', { ...option })
}

function login (loginInfo) {
  return request.post('/login', {
    data: loginInfo
  })
}

export {
  getCode,
  forget,
  login
}
