import config from '../../../config/'
import axios from 'axios'

// initial state
const state = {
  all: [],
  selectedPost: null
}

// getters
const getters = {
  allPosts: state => state.all,
  selectedPost: state => state.selectedPost
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
  },

  getPost ({ commit }, { postID }) {
    axios.request(
      {
        'method': 'get',
        'baseURL': config.dev.csian_blog_api.url,
        'url': '/api/posts/' + postID
      })
    .then(response => {
      commit('setSelectedPost', response.data)
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
  },
  setSelectedPost (state, post) {
    state.selectedPost = post
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
