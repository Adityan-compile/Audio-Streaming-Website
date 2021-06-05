'use strict';

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
        }
    }
}

export default audio;