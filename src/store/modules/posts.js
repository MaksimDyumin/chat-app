import {API_URL} from '/config'
import instance from '@/plugins/axios'

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
  async getPosts({commit},params) {
    await instance.get(API_URL + `api/v1/posts/?limit=${params.limit}&offset=${params.offset}`)
    .then(res =>{
      commit('SET_POSTS', res.data)
    })
    .catch(err => {
      console.error(err)
    })
  },
  async createPost({commit}, post) {
    console.log({commit})
    await instance.post(API_URL + 'create_posts/', post)
    .then(res =>{
      alert('пост создан')
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  },
}