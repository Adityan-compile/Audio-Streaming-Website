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
        console.log(authData);
        const payload = {
          access_token: authData.accessToken,
          refresh_token: authData.refreshToken,
        };
  
        var response = await axios.post(
          `/auth/tokens/refresh`,
          payload
        );
        await store.dispatch("auth/setTokens", response.data);
        error.config.headers[
          "Authorization"
        ] = `bearer ${response.data.accessToken}`;
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    }
  );
  
  export default interceptor;