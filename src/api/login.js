/*
 * @Descripttion:
 * @Author: 吻风
 * @Date: 2021-08-08 12:07:46
 * @LastEditors: 吻风
 * @LastEditTime: 2021-08-09 21:32:47
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

const forget = async (option) => {
  let result
  try {
    var res = await axios.post('/forget', { ...option })
    if (res.status === 200) {
      result = res.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}
export {
  getCode,
  forget
}
