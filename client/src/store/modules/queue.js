'use strict';

import instance from "@/axios.js";
import emitter from '@/shared/bus';

const queue = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {}
};

export default queue;