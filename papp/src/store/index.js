import Vue from 'vue'
import Vuex from 'vuex'
import FooterNavTab from './config/FooterNavTab'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    FooterNavTab
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
