/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-08 12:07:46
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-07 09:52:21
 */
import request from '@/utils/request.js'

const _prefix = '/login'

const getCode = (sid) => {
  return request.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

const forget = (option) => {
  return request.post(_prefix + '/forget', { ...option })
}

function login (loginInfo) {
  return request.post(_prefix + '/login', {
    data: loginInfo
  })
}

const reg = async (regInfo) => {
  return request.post(_prefix + '/reg', {
    data: regInfo
  })
}

export {
  getCode,
  forget,
  login,
  reg
}
