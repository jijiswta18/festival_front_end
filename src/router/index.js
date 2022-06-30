import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FestivalView from '../views/festival/FestivalView.vue'
import UserView from '../views/user/UserView.vue'
import UserCreate from '../views/user/UserCreate.vue'
import ReportView from '../views/report/ReportView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
    // component: () => import(/* webpackChunkName: "about" */ '../views/festival/FestivalView.vue')
  },
  {
    path: '/',
    name: 'festival',
    component: FestivalView
    // component: () => import(/* webpackChunkName: "about" */ '../views/festival/FestivalView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
    // component: () => import(/* webpackChunkName: "about" */ '../views/festival/FestivalView.vue')
  },
  {
    path: '/user/create',
    name: 'user_create',
    component: UserCreate
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
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
