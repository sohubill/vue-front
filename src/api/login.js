/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-08 12:07:46
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-08 12:27:13
 */
import axios from 'axios'

const getCode = async () => {
  let result
  try {
    var res = await axios.get('/getCaptcha')
    if (res.status === 200) {
      result = res.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}
export {
  getCode
}
