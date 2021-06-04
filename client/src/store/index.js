'use strict';

import {createStore} from 'vuex';
import auth from './modules/auth';
import uploads from './modules/uploads';
import user from './modules/user';
import utils from './modules/utils';

export default createStore({
  modules: {
    auth,
    utils,
    uploads,
    user,
  },
});
