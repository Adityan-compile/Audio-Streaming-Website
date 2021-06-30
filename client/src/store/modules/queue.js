'use strict';

import instance from "@/axios.js";
import emitter from '@/shared/bus';

const queue = {
    namespaced: true,
    state: {
        queue: []
    },
    getters: {
        getQueue(state){
            return state.queue;
        }
    },
    mutations: {
        pushToQueue(state, data){
            state.queue.push(data);
        },
        deleteFromQueue(state, value){
            let index = state.queue.indexOf(value) || -1;
            if(index === -1){
                return -1;
            }else{
                return state.queue.splice(0, index);
            }
        }
    },
    actions: {
        ended({ commit, rootGetters, getters }, data){
            console.table(getters.getQueue);
            if(!data) data = rootGetters['audio/getPlaying'];
            commit('deleteFromQueue', data);
        }
    }
};

export default queue;