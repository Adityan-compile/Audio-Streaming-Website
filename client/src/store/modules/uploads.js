"use strict";

import instance from "@/axios.js";

const uploads = {
  namespaced: true,
  state: {
    progress: 0,
  },
  getters: {},
  mutations: {
    setProgress(state, progress) {
      state.progress = progress;
    },
  },
  actions: {
    uploadTrack({ commit }, payload) {
      return new Promise((resolve, reject) => {
        instance
          .post(`/uploads/tracks/new`, payload)
          .then(({ status, data }) => {
            console.log(data);
            if (status === 201) {
              resolve(true);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    fetchUploads({ commit }, id){
      return new Promise((resolve, reject)=>{
        instance.get(`/users/uploads?id=${id}`).then(({ data, status })=>{
          if(status === 200){
             resolve(data.uploads);
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

export default uploads;
