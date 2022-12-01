import {API_URL} from '/config'
console.log(API_URL)

export const namespaced = true

export const state = () => ({
  user: {}
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  SET_USER(state, user) {
    return state.user = user
  }
}

export const actions = {

}