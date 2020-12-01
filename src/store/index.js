import Vue from 'vue'
import Vuex from 'vuex'

import bodyData from './modules/body-data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bodyData
  }
})
