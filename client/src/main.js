'use strict';

import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/index';
import store from './store/index';
// import axios from './axios'

// let bus = new Vue();

// export default bus;

export default createApp(App).use(store).use(router).mount('#app');
