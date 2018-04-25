import axios from 'axios'
import router from '../../router'
let apiUrl = 'https://desolate-taiga-56447.herokuapp.com/api'
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
  signup({commit, state}, loginData) {
    console.log("HI");
    axios.post(`${apiUrl}/user/create`, {
      name: loginData.name,
      email: loginData.email
    }).then((res) => {
      commit("setUser", res.data)
      router.push('/')
    }).catch((err) => alert(err))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
