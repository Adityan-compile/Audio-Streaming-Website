import axios from 'axios';
// import instance from '@/axios.js';

const auth = {
  namespaced: true,
  state: {
    loggedIn: localStorage.getItem('LOGGED_IN') || false,
    user: localStorage.getItem('USER') || {},
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
  },
  mutations: {
    setUser(state, user) {
      localStorage.setItem('USER', user);
      state.user = user;
    },
    setLoginStatus(state, status) {
      state.loggedIn = status;
      localStorage.setItem('LOGGED_IN', status);
    },
    clearState(state) {
      localStorage.clear();
      state.loggedIn = false;
      state.user = {};
    },
  },
  actions: {
    login: ({commit}, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/login`, payload)
          .then(({data, status}) => {
            if (status === 200) {
              commit('setUser', data.user);
              commit('setLoginStatus', true);
              resolve(true);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout: ({commit}, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/logout`, payload)
          .then(({data, status}) => {
            if (status === 200) {
              commit('clearState');
              commit('setLoginStatus', false);
              resolve(true);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    register: ({commit}, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/signup`, payload)
          .then(({data, status}) => {
            console.log("Data: "+data);
            if (status === 200) {
              commit('setUser', data.user);
              commit('setLoginStatus', true);
              resolve(true);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAuthData: () => {
      return {
        user: JSON.parse(localStorage.getItem('USER')),
      };
    },
    regenerateToken({commit}, payload) {
      console.log("inside regenerateToken");
      return new Promise((resolve, reject) => {
        axios
          .post(`/auth/tokens/refresh`, payload)
          .then(({data, status}) => {
            console.log(data);
            if (status === 200) {
              commit('setTokens', data);
              commit('setLoginStatus', true);
              resolve(true);
            } else {
              reject(status);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};

export default auth;
