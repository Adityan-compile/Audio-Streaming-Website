'use strict';

import {createRouter, createWebHistory} from 'vue-router';
import {authGuard, routeGuard} from '../shared/guard';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: authGuard,
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    beforeEnter: authGuard,
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/user/profile',
    name: 'Profile',
    beforeEnter: routeGuard,
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/player',
    name: 'Player',
    beforeEnter: routeGuard,
    component: () => import('../views/Player.vue'),
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/Browse.vue'),
  },
  {
    path: '/tracks/new',
    name: 'Upload',
    beforeEnter: routeGuard,
    component: () => import('../views/Upload.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: () => import('../views/Errors.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
