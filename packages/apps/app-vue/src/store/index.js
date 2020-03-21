import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import dict from './modules/dict'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    dict
  }
})
