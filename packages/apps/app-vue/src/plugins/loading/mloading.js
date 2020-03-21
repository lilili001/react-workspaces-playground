import Vue from 'vue'
import loadingConfig from './mloading.vue'

let tempFn = Vue.extend(loadingConfig)
let instance = new tempFn({
  el: document.createElement('div')
})
document.body.appendChild(instance.$el)
const tempObj = {
  show (msg) {
    if (msg !== undefined) {
      instance.text = msg
    }
    instance.show = true
  },
  hide () {
    instance.show = false
    instance.text = '加载中...'
  }
}
// export default tempObj

export default {
  install (Vue, options) {
    Vue.prototype.$mLoading = tempObj
  }
}
