'use strict';

import {createStore} from 'vuex';
import auth from './modules/auth';
import uploads from './modules/uploads';
import user from './modules/user';
import utils from './modules/utils';
import audio from './modules/audio';
import playlists from './modules/playlists';
import queue from "./modules/queue";


let modules = {
  auth,
  utils,
  uploads,
  user,
  audio,
  playlists,
  queue
}

export default createStore({
  modules: modules,
});
