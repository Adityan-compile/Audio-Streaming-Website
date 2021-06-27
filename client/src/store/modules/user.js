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
    },
    deleteAccount({ commit }, id){
      return new Promise((resolve, reject)=>{
        instance.delete(`/users/account/delete?id=${id}`).then(({status})=>{
          if(status === 204) {
            resolve(true);
          }else{
            reject("Error");
          }
        }).catch(err=>{
          reject(err);
        });
      });
    },
    updateProfile({ commit }, payload){
      return new Promise((resolve, reject) => {
        instance
          .patch(`/users/profile/edit`, payload)
          .then(({data, status}) => {
            if (status === 200) {
              resolve(true);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  },
};

export default user;
