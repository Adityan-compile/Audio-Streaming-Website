import axios from "axios";
import store from './store/index';
import router from './router/index';

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

instance.defaults.headers.common["Authorization"] = `bearer ${localStorage.getItem("ACCESS_TOKEN")}`;


instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    let req = err.config;
    if (err.response.status === 401 && req.url.includes("auth/tokens/refresh")) {
      store.commit("auth/clearState");
      router.push("/login");
      return Promise.reject(err);
    } else if ((err.response.status === 401 && !req._retry)) {
      req._retry = true;
      let refresh = await store.dispatch("auth/regenerateToken", {
        refreshToken: localStorage.getItem("REFRESH_TOKEN"),
      });
      if (refresh === true) {
        console.log("Refreshed");
        return axios(req);
      } else {
        console.log("Rejected");
        return Promise.reject(err);
      }
    }
  }
);

export default instance;
