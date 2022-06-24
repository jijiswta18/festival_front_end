import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FestivalView from '../views/festival/FestivalView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'festival',
    component: FestivalView
    // component: () => import(/* webpackChunkName: "about" */ '../views/festival/FestivalView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
