import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSimpleAlert from "vue-simple-alert";

// import axios from 'axios'

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;

createApp(App).use(store).use(router).use(VueSimpleAlert).mount('#app')
