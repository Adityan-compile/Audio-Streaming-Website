import axios from "axios";
import interceptor from "@/shared/interceptor";

const BASE_URL = process.env.VUE_APP_API_URL;

const auth = {
	namespaced: true,
	state: {
		loggedIn: false,
		accessToken: "" || null,
		refreshToken: "" || null,
	},
	getters: {
		getAccessToken(state) {
			return state.accessToken;
		},
		getRefreshToken(state) {
			return state.refreshToken;
		},
		getAuthData(state){
			if(state.loggedIn === false) return null;
			let data = {
				accessToken: state.accessToken,
				refreshToken: state.refreshToken
			};
			return data;
		}
	},
	mutations: {
		setTokens(state, payload) {
			localStorage.setItem("ACCESS_TOKEN", payload.accessToken);
			localStorage.setItem("REFRESH_TOKEN", payload.refreshToken);
			state.refreshToken = payload.refreshToken;
			state.accessToken = payload.accessToken;
		},
		setLoginStatus(state, status){
			state.loggedIn = status;
		}
	},
	actions: {
		login: ({ commit }, payload)=>{
			return new Promise((resolve, reject) => {
				interceptor.post(`${BASE_URL}/auth/login`, payload).then(({data, status})=>{
					if(status === 200){
						commit('setTokens', {
							accessToken: data.accessToken,
							refreshToken: data.refreshToken
						});
						commit('setLoginStatus', {status: true});
						resolve(true);
					}else{
						reject(`Error: ${status}`);
					}
				}).catch(err=>{
					reject(err);
				})
			});
		},
	},
};

export default auth;
