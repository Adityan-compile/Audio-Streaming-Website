'use strict';

import emitter from '@/shared/bus';
import instance from "@/axios.js";

const audio = {
    namespaced: true,
    state: {
        playing: {},
        playingId: '',
        isPlaying: false,
        paused: true
    },
    getters: {
        getPlaying(state){
            return state.playing;
        },
        getPlayingId(state){
            return state.playingId;
        },
        getIsPlaying(state){
            return state.isPlaying;
        },
        getPaused(state){
            return state.paused;
        }
    },
    mutations: {
        setPlaying(state, music){
            state.playing = music;
        },
        setPlayingId(state, id){
            state.playingId = id;
        },
        setIsPlaying(state, status){
            state.isPlaying = status;
        },
        setPaused(state, status){
            state.paused = status;
        }
    },
    actions: {
        play({ commit, getters }, music){
            if(!music) music = getters.getPlaying;
            if(music._id === getters.getPlaying._id){
                commit('setPlaying', music);
                commit('setPlayingId', music._id);
                commit('setIsPlaying', true);
                commit('setPaused', false);
                emitter.emit('stateChange', 'playCurrent');
            }else{
                commit('setPlaying', music);
                commit('setPlayingId', music._id);
                commit('setIsPlaying', true);
                commit('setPaused', false);
                emitter.emit('stateChange', 'play');
            }
        },
        pause({ commit }){
            commit('setIsPlaying', false);
            commit('setPaused', true);
            emitter.emit('stateChange', 'pause');
        },
        fetchTrackDetails({ commit }, id){
            return new Promise((resolve, reject)=>{
                instance.get(`/tracks/get?id=${id}`).then(({ data, status })=>{
                    if(status === 200){
                        resolve(data.track);
                    }else{
                        reject(`Error: ${status}`);
                    }
                }).catch(err =>{
                    reject(err);
                });
            });
        },
        delete({ commit }, id){
                return new Promise((resolve, reject)=>{
                    instance.delete(`/uploads/tracks/delete?id=${id}`).then(({status, data})=>{
                        if(status === 201){
                            resolve(data.track);
                        }else{
                            reject("Error");
                        }
                    }).catch(err=>{
                        reject(err);
                    });
                });      
        }
    }
}

export default audio;