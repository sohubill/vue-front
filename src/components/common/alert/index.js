/*
 * @Descripttion: 安装弹窗
 * @Author: 吻风
 * @Date: 2021-09-06 13:05:33
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-06 15:07:15
 */
import AlertComponent from '@/components/common/alert/Alert'

const alert = {}

alert.install = (Vue) => {
  const AlertConstuctor = Vue.extend(AlertComponent)
  const instance = new AlertConstuctor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$alert = (msg) => {
    instance.msg = msg
    instance.isShow = true
    instance.type = 'alert'
  }
  Vue.prototype.$confirm = (msg, confirm, cancel) => {
    instance.msg = msg
    instance.isShow = true
    instance.type = 'confirm'
    instance.confirm = confirm
    instance.cancel = cancel
  }
}

export default alert
