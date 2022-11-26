export const namespaced = true

export const state = () => ({
  posts: {}
})

export const getters = {
  getPosts(state) {
    return state.user 
  }
}

export const mutations = {
  SET_POSTS(state, user) {
    return state.user = user
  }
}

export const actions = {

}