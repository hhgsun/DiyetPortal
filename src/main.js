// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import { store } from './store/store'
import { fbauth } from './firebaseConfig';

// bootstrap load
require('./assets/bootstrap/bootstrap.min.css')

Vue.config.productionTip = false

let app;
fbauth.onAuthStateChanged(() => {
  if (fbauth.currentUser) {
    store.commit("SET_AUTH", fbauth.currentUser.providerData[0]);
  }
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      components: { App },
      template: '<App/>'
    });
  }
});