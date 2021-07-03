'use strict';

import instance from "@/axios.js";
import emitter from '@/shared/bus';
// import buckets from "buckets-js";

const queue = {
    namespaced: true,
    state: {
        queue: [],
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
            let index = state.queue.map((x)=>x._id).indexOf(value._id);
            console.log("index", index)
            if(index === -1){
                return -1;
            }else{
                let queue = state.queue;
                console.log("Queue::Before");
                console.log(queue);
                queue = queue.splice(index, 1);
                console.log("Queue::After");
                console.log(queue);
            }
        },
        replaceQueue(state, data){
            (!Array.isArray(data)) ? -1 : state.queue = data.reverse();
        }
    },
    actions: {
        ended({ commit, rootGetters, getters, dispatch }, data){
            commit('deleteFromQueue', data);
            let queue = getters.getQueue;
            console.log(queue)
            if(queue.length === 0) return;
            let next = queue[queue.length - 1];
            console.log(next);
            dispatch('audio/play', next, { root: true });
        },
        playAll({ commit, getters, dispatch }, data){
            commit('replaceQueue', data);
            let queue = getters.getQueue;
            let next = queue[queue.length - 1];
            console.log(queue, next);
            dispatch("audio/play", next, { root: true });
        } 
    }
};

export default queue;