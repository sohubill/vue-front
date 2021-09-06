/*
 * @Descripttion: 网络http请求工具
 * @Author: 吻风
 * @Date: 2021-09-04 18:02:43
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-04 18:13:07
 */
import HttpRequest from './axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod

const request = new HttpRequest(baseUrl)

export default request
