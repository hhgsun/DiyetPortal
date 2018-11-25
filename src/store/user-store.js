export default {
   state: {
      user: null
   },
   mutations: {
      SET_USER(state, user) {
         state.user = user;
      },
   },
   actions: {
      getUserProfile({ commit }, payload) {
         db.collection("users").doc(payload.uid).get().then(res => {
            let user = res.exists ? res.data() : null;
            commit("SET_USER", user)
         })
      },
      setUserProfile({ commit }, payload) {
         db.collection("users").doc(payload.uid).set(payload).then(() => {
            commit("SET_USER", payload)
         }).catch(err => console.log(err))
      }
   },
   getters: {
      user(state) {
         return state.user
      },
   }
}
