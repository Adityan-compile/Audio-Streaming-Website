'use strict';

let loggedIn = localStorage.getItem('LOGGED_IN');
console.log(loggedIn);

exports.routeGuard = (to, from, next) => {
  if (loggedIn === false){
    next('/login');
  } else {
    next();
  }
};

exports.authGuard = (to, from, next) => {
  if (loggedIn === false) {
    next();
  } else {
    next('/');
  }
};
