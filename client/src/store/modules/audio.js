'use strict';

import emitter from '@/shared/bus';
import instance from "@/axios.js";

const audio = {
    namespaced: true,
    state: {
        playing: {},
        playingId: '',
        isPlaying: false,
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
        }
    },
    actions: {
        play({ commit, getters }, music){
            if(music._id === getters.getPlaying._id){
                commit('setPlaying', music);
                commit('setPlayingId', music._id);
                commit('setIsPlaying', true);
                emitter.emit('stateChange', 'playCurrent');
            }else{
                commit('setPlaying', music);
                commit('setPlayingId', music._id);
                commit('setIsPlaying', true);
                emitter.emit('stateChange', 'play');
            }
        },
        pause({ commit }){
            commit('setIsPlaying', false);
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
        }
    }
}

export default audio;