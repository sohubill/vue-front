/*
 * @Descripttion: axios封装
 * @Author: 吻风
 * @Date: 2021-09-04 11:33:11
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-05 22:11:53
 */
import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 15000
    }
    return config
  }
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        console.log(config)
        return config
      },
      (err) => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )
    // 返回拦截器
    instance.interceptors.response.use(
      (res) => {
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      (err) => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }
  // 创建请求
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }
  // get
  get (url, options) {
    const newOptions = Object.assign({
      method: 'GET',
      url: url
    }, options)
    return this.request(newOptions)
  }
  post (url, options) {
    const newOptions = Object.assign({
      method: 'POST',
      url: url
    }, options)
    return this.request(newOptions)
  }
}

export default HttpRequest
