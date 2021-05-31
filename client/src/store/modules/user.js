'use strict';

const user = {
  namespaced: true,
  state: {
    hidden: localStorage.getItem('HIDDEN') || false,
  },
  getters: {
    show_cookie_consent(state) {
      return state.hidden;
    },
  },
  mutations: {
    setConsent(state, consent) {
      localStorage.setItem('HIDDEN', consent);
      state.hidden = consent;
    },
  },
  actions: {},
};

export default user;
