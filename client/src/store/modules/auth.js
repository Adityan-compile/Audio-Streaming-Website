import axios from "axios";

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
	},
	mutations: {
		setTokens(state, payload) {
			localStorage.setItem("ACCESS_TOKEN", payload.accessToken);
			localStorage.setItem("REFRESH_TOKEN", payload.refreshToken);
			state.refreshToken = payload.refreshToken;
			state.accessToken = payload.accessToken;
		},
	},
	actions: {
		login: ({ commit }, payload)=>{
			return new Promise((resolve, reject) => {
				axios.post(`${BASE_URL}/auth/login`, payload).then(({data, status})=>{
					if(status === 200){
						commit({
							type: setTokens,
							accessToken: data.accessToken,
							refreshToken: data.refreshToken
						})
						resolve(true);
					}
				}).catch(err=>{
					reject(err);
				})
			});
		},
	},
};

export default auth;
