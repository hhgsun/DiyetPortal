import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth-store'

Vue.use(Vuex)

export const store = new Vuex.Store({
   modules: {
      authStore: authStore,
   }
})
