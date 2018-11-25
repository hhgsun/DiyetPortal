export default {
   state: {
      auth: null
   },
   mutations: {
      SET_AUTH(state, user) {
         state.auth = user;
      },
   },
   getters: {
      auth(state) {
         return state.currentUser
      },
   }
}
