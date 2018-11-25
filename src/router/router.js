import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/store'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
  ],
  /* mode: "history" */
});

router.beforeEach((to, from, next) => {
  let authUser = store.getters.auth;
  console.log("authUser-router", authUser);
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !authUser) next("/login")
  else next()
});

export default router;
