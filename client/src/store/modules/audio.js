'use strict';

import emitter from '@/shared/bus';

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
        }
    }
}

export default audio;