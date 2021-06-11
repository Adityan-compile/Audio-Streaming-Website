'use strict';

exports.routeGuard = (to, from, next) => {
  if (localStorage.getItem("LOGGED_IN")){
    next();
  } else {
    next('/login');
  }
};

exports.authGuard = (to, from, next) => {
  if (localStorage.getItem("LOGGED_IN")) {
    next('/');
  } else {
    next();
  }
};
