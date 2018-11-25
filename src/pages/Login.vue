<template>
   <div id="login">
      <button class="btn btn-light" @click="socialLogin('facebook');">Facebook Giriş</button>
      <button class="btn btn-light" @click="socialLogin('google');">Google Giriş</button>
   </div>
</template>

<script>
import { fbauth } from "../firebaseConfig";
import firebase from "firebase";

export default {
  name: "Login",
  methods: {
    socialLogin(provider) {
      if (provider == "facebook")
        provider = new firebase.auth.FacebookAuthProvider();
      if (provider == "google")
        provider = new firebase.auth.GoogleAuthProvider();
      fbauth
        .signInWithPopup(provider)
        .then(res => {
          store.commit("SET_AUTH", fbauth.currentUser.providerData[0]);
          if(res.additionalUserInfo.isNewUser) {
            this.$store.dispatch("setUserProfile", fbauth.currentUser.providerData[0]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
