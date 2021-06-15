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
        }
    }
};

export default playlists;
