'use strict';

import instance from "@/axios.js";

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
  actions: {
    fetchUserDetails({ commit }, id){
      return new Promise((resolve, reject)=>{
        instance.get(`/users/details?id=${id}`).then(({data, status})=>{
          if(status === 200){
            resolve(data.user);
          }else{
            reject(`Error: ${status}`);
          }
        }).catch(err=>{
          reject(err);
        });
      });
    }
  },
};

export default user;
