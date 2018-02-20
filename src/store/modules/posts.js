import config from '../../../config/'
import axios from 'axios'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allPosts: state => state.all
}

// actions
const actions = {
  getAllPosts ({ commit }) {
    axios.request(
      {
        'method': 'get',
        'baseURL': config.dev.csian_blog_api.url,
        'url': '/api/posts'
      })
    .then(response => {
      commit('setPosts', response.data)
    })
    .catch(_error => {
      // error fetching posts
    })
  }
}

// mutations
const mutations = {
  setPosts (state, posts) {
    state.all = posts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
