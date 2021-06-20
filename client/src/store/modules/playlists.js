'use strict';

import instance from "@/axios.js";

const playlists = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchPlaylists(){
            return new Promise((resolve, reject)=>{
                instance.get('/playlists/all').then(({ status, data })=>{
                    if(status === 200){
                        resolve(data.playlists);
                    }else{
                        reject('Error');
                    }
                }).catch(err=>{
                    reject(err)
                });
            });
        },
        fetchPlaylist({ commit }, id){
            return new Promise((resolve, reject)=>{
                instance.get(`/playlists/get?id=${id}`).then(({ status, data })=>{
                    if(status === 200){
                        resolve(data.playlist);
                    }else{
                        reject('Error');
                    }
                }).catch(err=>{
                    reject(err)
                });
            });
        },
        newPlaylist({ commit }, title){
            return new Promise((resolve, reject)=>{
                instance.post('/playlists/new', {
                    title: title
                }).then(({ status, data })=>{
                    if(status === 201){
                        resolve(data);
                    }else{
                        reject("Error");
                    }
                }).catch(err=>{
                    reject(err);
                });
            });
        },
        add({ commit }, payload){
            return new Promise((resolve, reject)=>{
                instance.post('/playlists/music/add', payload).then(({status, data})=>{
                    if(status === 200){
                        resolve(data);
                    }else{
                        reject("Error");
                    }
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
};

export default playlists;
