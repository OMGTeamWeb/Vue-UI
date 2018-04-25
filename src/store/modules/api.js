import axios from 'axios'
import router from '../../router'
let apiUrl = 'http://localhost:2403/'
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
    axios.post(`${apiUrl}users`, {
      email: loginData.email,
      password: loginData.password,
      username: loginData.username
    }).then(res =>
      axios.post(`${apiUrl}users/login`, {
        email: loginData.email,
        password: loginData.password,
        username: loginData.username
      })
    ).then((res) => {
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
