//import {API_URL} from '/config'
import axios from 'axios'

export const namespaced = true

export const state = () => ({
  posts: {}
})

export const getters = {
  getPosts(state) {
    return state.posts 
  }
}

export const mutations = {
  SET_POSTS(state, posts) {
    return state.posts = posts
  }
}

export const actions = {
  async createPost() {
    await axios.get('https://www.google.ru/').then(res =>{
      console.log(res)
    })
  }
}