import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import store from '../store/index';
 
createAuthRefreshInterceptor(axios, (req)=>{
  let authData = store.getters["auth/getAuthData"];
  if(authData == null) return Promise.reject();
  axios.post(`${process.env.VUE_APP_API_URL}/auth/tokens/refresh`, authData).then((res)=>{
    req.response.config.headers['Authorization'] = `bearer ${res.data.accessToken}`;
    return Promise.resolve();
  });
});

