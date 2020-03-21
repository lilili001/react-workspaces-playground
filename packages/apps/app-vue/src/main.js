import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './routes/router'
import store from './store/index.js'
import ViewUI from './plugins/iview.js'
import { validators } from 'yxfeui/map/validataors'
import * as api from '@/api'
import './com'
import API from '@/components/index'
Vue.use(API);
// if you want to use default color, import this css file
//import 'vue-hljs/dist/vue-hljs.min.css'

import VueHighlightJS from 'vue-highlightjs'

window.lrz = require('lrz')
Vue.prototype.$validators = validators
Vue.prototype.$mLoading.show()
process.env.NODE_ENV === 'development' ? require('@/mock') : ''
window.isDebug = process.env.NODE_ENV === 'development'

Vue.prototype.$api = api
window._ = require('lodash')

window.server = '/api'

Vue.config.productionTip = false

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

router.beforeEach((to, front, next) => {
  ViewUI.LoadingBar.start()
  next()
})

router.afterEach((to) => {
  Vue.prototype.$mLoading.hide()
  ViewUI.LoadingBar.finish()
  const { title } = to.meta
  if (title) {
    document.title = to.meta.title
  }
})

// 封装报错弹窗
Vue.prototype.errorModal = (content, onOk, okText) => {
  let options = {
    title: '提示',
    content: content,
    okText: okText || '确 定'
  }
  if (onOk) options.onOk = onOk
  let errTimer = setTimeout(() => {
    Vue.prototype.$Modal.error(options)
    clearTimeout(errTimer)
  }, 200)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
