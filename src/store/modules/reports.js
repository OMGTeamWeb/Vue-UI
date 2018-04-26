import axios from 'axios'
import router from '../../router'
let apiUrl = 'https://desolate-taiga-56447.herokuapp.com/api'
let apiTask = 'https://cryptic-inlet-78225.herokuapp.com/api'
let apiReport = 'https://cryptic-inlet-78225.herokuapp.com/api'
const state = {
  user: {}
}
const mutations = {
  setUser(state,user){
    state.user = user
  }
}
const getters = {}
const actions = {
  getTasks({commit}){

    return axios.get('https://cryptic-inlet-78225.herokuapp.com/api/task').then((res) => {
      // commit("serUser", res.data)
      //console.log(res);
      return (JSON.stringify(res.data))
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
