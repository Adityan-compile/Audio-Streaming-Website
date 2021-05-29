'use strict';

const user = {
  namespaced: true,
  state: {
    showCookieConsent: localStorage.getItem('COOKIE_CONSENT') || true,
  },
  getters: {
    show_cookie_consent(state) {
      return state.showCookieConsent;
    },
  },
  mutations: {
    setConsent(state, consent) {
      localStorage.setItem('COOKIE_CONSENT', consent);
      state.showCookieConsent = consent;
    },
  },
  actions: {},
};

export default user;
