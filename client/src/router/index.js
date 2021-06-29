"use strict";

import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import routes from "./routes";


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  store.state.utils.page = to.name;
  next();
});

export default router;
