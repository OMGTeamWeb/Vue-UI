import axios from 'axios'
import router from '../../router'
let apiUrl = 'https://desolate-taiga-56447.herokuapp.com/api'
let apiTask = 'https://cryptic-inlet-78225.herokuapp.com/api'
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
  signup({commit, state}, signupData) {
    console.log("HI");
    axios.post(`${apiUrl}/user/create`, {
      name: signupData.name,
      email: signupData.email
    }).then((res) => {
      commit("setUser", res.data)
      router.push('/')
    }).catch((err) => alert(err))
  },
  login({commit, state}, loginData){
    console.log("ON LOGIN");
    axios.post(`${apiUrl}/user/signin`,{
      name: loginData.name,
      email: loginData.email
    }).then((res) => {
      // commit("serUser", res.data)
      router.push('/')
    }).catch((err) => alert(err))
  },
  getAllTasks({commit}, userId){
    console.log('userId from api.js', userId)
    return axios.get(`${apiTask}/task/user/${userId}`).then((res) => {
      // commit("serUser", res.data)
      return res.data
    })
  },
  addTask({commit, state}, taskData){
    console.log("DATA:", taskData);
    axios.post(`${apiTask}/task`,{
      userId: taskData.userId,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
      reminder: taskData.reminder
    }).then((res) => {
      // commit("serUser", res.data)
    }).catch((err) => alert(err))

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
