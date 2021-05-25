// import instance from '@/axios.js';
import axios from 'axios';

const utils = {
  namespaced: true,
  state: {
    prevQuery: '',
  },
  getters: {},
  mutations: {
    setPrevQuery(state, query) {
      state.prevQuery = query;
    },
  },
  actions: {
    search({commit}, query) {
      return new Promise((resolve, reject) => {
       axios
          .get(`/search?query=${query}`)
          .then(({data, status}) => {
            if (status === 200) {
              commit('setPrevQuery', query);
              resolve(data.results);
            } else {
              console.log(status);
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchArtists() {
      return new Promise((resolve, reject) => {
        axios
          .get(`/artists?count=6`)
          .then(({data, status}) => {
            if (status === 200) {
              resolve(data.artists);
            } else {
              reject(`Error: ${status}`);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchTracks(options) {
      return new Promise((resolve, reject) => {
        if (options.sort === true) {
          axios
            .get(`/tracks?sort=1`)
            .then(({data, status}) => {
              if (status === 200) {
                resolve(data.tracks);
              } else {
                reject(`Error: ${status}`);
              }
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          axios
            .get(`/tracks`)
            .then(({data, status}) => {
              if (status === 200) {
                resolve(data.tracks);
              } else {
                reject(`Error: ${status}`);
              }
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    },
  },
};

export default utils;
