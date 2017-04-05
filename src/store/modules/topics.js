import topics from '../../api/topics'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allTopics: state => state.all
}

// actions
const actions = {
  getAllTopics ({ commit }) {
    topics.getTopics(topics => {
      commit(types.RECEIVE_TOPICS, { topics })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TOPICS] (state, { topics }) {
    state.all = topics
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
