"use strict";

import axios from "axios";
import store from './store/index';
import router from './router/index';

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});


axios.defaults.withCredentials = true;
axios.defaults.credentials = 'include';

instance.interceptors.response.use((res)=>{
  return res;
}, async(err)=>{
	console.log(err);
  let req = err.config;
  if(err.response.status === 401){
    router.push("/login");
    return Promise.reject(err);
  }
});

export default instance;
