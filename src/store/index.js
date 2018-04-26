import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import reports from './modules/reports'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    api,
    reports
  }
})
