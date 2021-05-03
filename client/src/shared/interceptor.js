// import axios from "axios";
// import store from '../store/index';
 
// const interceptor = axios.create({});
 
// interceptor.interceptors.request.use((config) => {
//   const authData = store.getters["auth/getAuthData"];
//   if(authData == null) return null;
//   config.headers.common["Authorization"] = `bearer ${authData.token}`;
//   return config;
// });

// export default interceptor

import axios from "axios";
import store from '../store/index';
 
const interceptor = axios.create({});
 
 
interceptor.interceptors.request.use((config) => {
    const authData = store.getters["auth/getAuthData"];
    if (authData == null) {
      return config;
    }
  
    config.headers.common["Authorization"] = `bearer ${authData.accessToken}`;
    return config;
  });
  
  interceptor.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        const authData = store.getters["auth/getAuthData"];
        const payload = {
          access_token: authData.accessToken,
          refresh_token: authData.refreshToken,
        };
  
        var response = await axios.post(
          `${process.env.VUE_APP_API_URL}/auth/tokens/refresh`,
          payload
        );
        await store.actions("auth/setTokens", response.data);
        error.config.headers[
          "Authorization"
        ] = `bearer ${response.data.access_token}`;
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    }
  );
  
  export default interceptor;