import axios from 'axios';
import instance from '@/axios.js';

const uploads = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
      uploadTrack(payload){
          return new Promise((resolve, reject)=>{
              instance.post(`${process.env.VUE_APP_API_URL}/uploads/tracks/new`, payload).then(({status, data})=>{
                  if(status === 201){
                      resolve(true);
                  }else{
                      reject(`Error: ${status}`);
                  }
              }).catch(err => {
                  reject(err);
              });
          });
      }
  },
};

export default uploads;
