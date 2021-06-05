'use strict';

import emitter from '@/shared/bus';

const audio = {
    namespaced: true,
    state: {
        playing: {}
    },
    getters: {
        getPlaying(state){
            return state.playing;
        }
    },
    mutations: {
        setPlaying(state, music){
            state.playing = music;
            console.log(music)
        }
    },
    actions: {
        play({ commit }, music){
            commit('setPlaying', music);
            emitter.emit('stateChange');
        }
    }
}

export default audio;