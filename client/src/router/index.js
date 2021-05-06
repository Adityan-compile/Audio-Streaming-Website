import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from '../shared/guard';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: authGuard,
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    beforeEnter: authGuard,
    component: () => import('../views/Signup.vue')   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
