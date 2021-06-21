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
                instance.patch('/playlists/music/add', payload).then(({status, data})=>{
                    if(status === 200){
                        resolve(data);
                    }else{
                        reject("Error");
                    }
                }).catch(err=>{
                    reject(err);
                });
            });
        },
        remove({ commit }, payload){
            return new Promise((resolve, reject)=>{
                instance.delete('/playlists/music/remove', payload).then(({status, data})=>{
                    if(status === 200){
                        resolve(data.playlist);
                    }else{
                        reject("Error");
                    }
                }).catch(err=>{
                    reject(err);
                });
            });      
        },
        delete({ commit }, id){
            return new Promise((resolve, reject)=>{
                instance.delete(`/playlists/delete?id=${id}`).then(({ data, status })=>{
                    (status === 200) ? resolve(true): reject('Error');
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
};

export default playlists;
