import {createStore} from 'vuex';

import auth from './modules/auth';
import utils from './modules/utils';

export default createStore({
  modules: {
    auth,
    utils,
  },
});
