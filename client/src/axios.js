'use strict';

import axios from 'axios';
import router from './router/index';

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

instance.defaults.withCredentials = true;
instance.defaults.credentials = 'include';
instance.defaults.crossDomain = true;

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log(err);
    let req = err.config;
    if (err.response.status === 401) {
      router.push('/login');
      return Promise.reject(err);
    }
  }
);

export default instance;
