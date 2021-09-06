<!--
 * @Descripttion: 弹窗
 * @Author: 吻风
 * @Date: 2021-09-06 13:05:47
 * @LastEditors: 吻风
 * @LastEditTime: 2021-09-06 15:50:03
-->
<template>
  <div  v-if="isShow" >
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type==='alert'">
        <div class="btnCommon success" @click="close()">确定</div>
      </div>
      <div v-else class="space-around">
        <div class="btnCommon cancel" @click="clickCancel" >取消</div>
        <div class="btnCommon success" @click = "clickConfirm()">确定</div>
      </div>
    </div>
    <div class="mask" @click="clickMask()"></div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'alert'
    },
    confirm: {
      type: Function,
      default: () => { console.log('点击确认') }
    },
    cancel: {
      type: Function,
      default: () => { console.log('点击取消') }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    clickMask () {
      if (this.type === 'alert') {
        this.close()
      }
    },
    clickConfirm () {
      if (this.confirm) {
        this.confirm()
      }
      this.close()
    },
    clickCancel () {
      if (this.cancel) {
        this.cancel()
      }
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-main: #009688;
$btn-dark:lighten($btn-main,5%);
$btn-cancel: #BEBEBE;

.alert {
  width: 300px;
  height: 120px;
  position: fixed;
  background: #fff;
  border-radius: 10px;
  margin-left: -150px;
  margin-top: -60px;
  left: 50%;
  top: 50%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
  padding:10px 6px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}
.flex {
  flex:1;
  vertical-align: 50%;
  align-items: center;
  display: flex;
}
.btnCommon {
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  &.success {
    background: $btn-main;
    color:#fff;
    &:hover {
      background: $btn-dark;
      cursor: pointer;
    }
  }
  &.cancel {
    background: $btn-cancel;
    color:#333;
    &:hover {
      background: lighten($btn-cancel,5%);
      cursor: pointer;
    }
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  z-index: 2999;
  overflow: hidden;
}
.space-around {
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-around;
  width:100%;
  padding:0 10px
}
</style>
