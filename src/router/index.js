import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Topics from '../pages/Topics.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/Topics', component: Topics },
    { path: '/About', component: About }
  ]
})

export default router
