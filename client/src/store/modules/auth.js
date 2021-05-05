import axios from "axios";
import interceptor from "@/shared/interceptor";

const auth = {
	namespaced: true,
	state: {
		loggedIn: localStorage.getItem("LOGGED_IN"),
		accessToken: localStorage.getItem("ACCESS_TOKEN") || null,
		refreshToken: localStorage.getItem("REFRESH_TOKEN") || null,
		user: localStorage.getItem("USER") || null,
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
			localStorage.setItem("USER", payload.user);
			state.refreshToken = payload.refreshToken;
			state.accessToken = payload.accessToken;
			state.user = payload.user;
			console.log("payload:", payload)
		},
		setLoginStatus(state, status){
			state.loggedIn = status;
			localStorage.setItem("LOGGED_IN", status);
		}
	},
	actions: {
		login: ({ commit }, payload)=>{
			return new Promise((resolve, reject) => {
				axios.post(`${process.env.VUE_APP_API_URL}/auth/login`, payload).then(({data, status})=>{
					if(status === 200){
						console.log(data)
						commit('setTokens', {
							accessToken: data.accessToken,
							refreshToken: data.refreshToken,
							user: data.user
						});
						commit('setLoginStatus', true);
						resolve(true);
					}else{
						reject(`Error: ${status}`);
					}
				}).catch(err=>{
					reject(err);
				})
			});
		},
		setTokens: ({ commit }, payload)=>{
			commit('setTokens', payload);
		},
	},
};

export default auth;
