'use strict';

import instance from '@/axios.js';

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
        instance
          .get(`/search?q=${query}`)
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
        instance
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
          instance
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
          instance
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
