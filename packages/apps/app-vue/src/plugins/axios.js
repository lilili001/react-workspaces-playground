'use strict'

import Vue from 'vue'
import axios from 'axios'
// import mloading from '@/components/loading/mloading.js'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
const errortips = {
  '400': '服务开小差了，请稍后再试',
  '401': '服务开小差了，请稍后再试',
  '403': '服务开小差了，请稍后再试',
  '404': '系统开小差了，请稍后再试',
  '405': '系统开小差了，请稍后再试',
  '408': '系统开小差了，请稍后再试',
  '500': '系统开小差了，请稍后再试',
  '501': '系统开小差了，请稍后再试',
  '502': '系统开小差了，请稍后再试',
  '503': '服务开小差了，请稍后再试',
  '504': '服务开小差了，请稍后再试',
  '505': '服务开小差了，请稍后再试'
}

_axios.defaults.timeout = 20000
window.ajaxNum = 0
// window.polarisserver = '/yxcode-gateway'
// window.baseserver = '/yxcode-gateway/base-server'
var isFormData = function (obj) {
  return obj instanceof FormData
}

_axios.interceptors.request.use((config) => {
  if (!isFormData(config.data) && config.method === 'post') {
    config.headers['Content-Type'] = 'application/json'
  }
  if (config.url.indexOf('searchBankBranch') == -1 && config.url.indexOf('dictionary') == -1) {
    Vue.prototype.$mLoading.show()
  }

  window.ajaxNum++
  return config
}, (error) => {
  // if (!isDev) Sentry.captureException(error);
  return Promise.reject(error)
})

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    window.ajaxNum--
    if (window.ajaxNum < 1) {
      Vue.prototype.$mLoading.hide()
    }
    let result = response.data
    if (result.code === 0 || !result.code || result.code == 200) {
      return result
    } else {
      if (result.code == -1999) {
        Vue.prototype.$Modal.error({
          title: ' ',
          content: `<div class="maxH-300">${result.message}</div>`
        })
      } else {
        Vue.prototype.$Message.error({
          content: result.message,
          duration: 3
        })
      }

      return false
    }
  }, (err) => {
    window.ajaxNum--
    Vue.prototype.$mLoading.hide()
    // mloading.hide()
    let content = ''
    if (err && !err.response && err.message.indexOf('timeout') > -1) { content += '请求超时' } else if (err && err.response && Object.keys(errortips).indexOf(String(err.response.status)) > -1) {
      content += errortips[String(err.response.status)]
    } else if (content === '') {
      content += err.message
    }

    let options = {
      title: '提示',
      content: content,
      width: 342
    }
    let errTimer = setTimeout(() => {
      Vue.prototype.$Modal.error(options)
      clearTimeout(errTimer)
    }, 200)
    return false
  })

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    },
    $http: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)
export default Plugin
export const $axios = _axios
