import axios from 'axios';
// import instance from '@/axios.js';

const uploads = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
      uploadTrack({ commit } ,payload){
          return new Promise((resolve, reject)=>{
              axios.post(`/uploads/tracks/new`, payload).then(({status, data})=>{
                console.log(data);
                  if(status === 201){
                      resolve(true);
                  }else{
                      reject(`Error: ${status}`);
                  }
              }).catch(err => {
                console.log(err);
                  reject(err);
              });
          });
      }
  },
};

export default uploads;
