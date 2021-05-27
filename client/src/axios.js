import axios from "axios";
import store from './store/index';
import router from './router/index';

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});


axios.defaults.withCredentials = true;

instance.interceptors.response.use((res)=>{
  return res;
}, async(err)=>{
  let req = err.config;
  if(err.response.status === 401){
    router.push("/login");
    return Promise.reject(err);
  }
});

export default instance;
