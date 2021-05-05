import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// axios.defaults.headers['Authorization'] = `bearer ${localStorage.getItem(accessToken)}`;

export default axios;