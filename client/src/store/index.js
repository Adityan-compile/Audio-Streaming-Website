'use strict';

import {createStore} from 'vuex';
import auth from './modules/auth';
import uploads from './modules/uploads';
import user from './modules/user';
import utils from './modules/utils';
import audio from './modules/audio';

export default createStore({
  modules: {
    auth,
    utils,
    uploads,
    user,
    audio
  },
});
