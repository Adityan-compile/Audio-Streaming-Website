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
            (state.queue.includes(data)) ?  -1 : state.queue.push(data);
        },
        deleteFromQueue(state, value){
            let index = state.queue.findIndex(x=> x._id === value._id);
            if(index === -1){
                return -1;
            }else{
                state.queue = state.queue.splice(0, index);
                console.log(state.queue)
                return state.queue;
            }
        },
        replaceQueue(state, data){
            (!Array.isArray(data)) ? -1 : state.queue = data;
        }
    },
    actions: {
        ended({ commit, rootGetters, getters }, data){
            if(!data) data = rootGetters['audio/getPlaying'];
            commit('deleteFromQueue', data);
            let queue = getters.getQueue;
            let next = queue[queue.length - 1];
            commit('audio/play', next, { root: true })
        },
        playAll({ commit, getters, dispatch }, data){
            commit('replaceQueue', data);
            let queue = getters.getQueue;
            let next = queue[queue.length - 1];
            dispatch("audio/play", next, { root: true });
        } 
    }
};

export default queue;