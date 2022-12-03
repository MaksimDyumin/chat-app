import {API_URL} from '/config'
import axios from 'axios'
import cookie from 'vue-cookies'

export const namespaced = true

export const state = () => ({
  user: {},
  cookie: ''
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  SET_USER(state, user) {
    return state.user = user
  },
  SET_TOKEN(state, token) {
    cookie.set('token', token)
    return
  },
}

export const actions = {
  async registerUser({commit}, user) {
    await axios.post(API_URL + `api/v1/users/register/`, user,{headers:{"content-type" :"application/json"}})
    .then(res =>{
      console.log(res)
      commit('SET_USER', res.data)
    })
    .catch(err => {
      console.log(err)
      return err
    })
  },
  
  async auth({commit}, auth) {
    await axios.post(API_URL + `api/v1/users/authenticate`, auth)
    .then(res =>{
      commit('SET_TOKEN', res.data)
      commit('SET_USER', res.data)
    })
    .catch(err => {
      console.log(err)
      return err
    })
  },
}

