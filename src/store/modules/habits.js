import axios from 'axios'
import router from '../../router'
let apiHabit = 'https://microservicehabit.herokuapp.com/api/'
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
getAllHabits({commit}, userId){
  console.log('userId from api.js', userId)
  return axios.get(`${apiHabit}/habit/user/${userId}`).then((res) => {
    // commit("serUser", res.data)
    return res.data
  })
},
addHabit({commit, state}, habitData){
  console.log("DATA:", habitData);
  axios.post(`${apiHabit}/habit`,{
    userId: habitData.userId,
    name: habitData.name,
    typeHabit: habitData.typeHabit,
    difficult: habitData.difficult,
    score: habitData.score
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
