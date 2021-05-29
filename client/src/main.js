'use strict';

import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/index';
import store from './store/index';
// import axios from './axios'

createApp(App).use(store).use(router).mount('#app');
