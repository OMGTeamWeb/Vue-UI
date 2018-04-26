import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import habits from './modules/habits'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    api,
    habits
  }
})
