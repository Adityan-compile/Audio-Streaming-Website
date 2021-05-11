import axios from "axios";

const auth = {
	namespaced: true,
	state: {
		loggedIn: localStorage.getItem("LOGGED_IN") || false,
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
		isLoggedIn(state) {
			return state.loggedIn;
		},
	},
	mutations: {
		setTokens(state, payload) {
			localStorage.setItem("ACCESS_TOKEN", payload.accessToken);
			localStorage.setItem("REFRESH_TOKEN", payload.refreshToken);
			localStorage.setItem("USER", payload.user);
			state.refreshToken = payload.refreshToken;
			state.accessToken = payload.accessToken;
			state.user = payload.user;
		},
		setLoginStatus(state, status) {
			state.loggedIn = status;
			localStorage.setItem("LOGGED_IN", status);
		},
		deleteTokens(state) {
			localStorage.clear();
		},
	},
	actions: {
		login: ({ commit }, payload) => {
			return new Promise((resolve, reject) => {
				axios
					.post(`${process.env.VUE_APP_API_URL}/auth/login`, payload, {skipAuthRefresh: true})
					.then(({ data, status }) => {
						if (status === 200) {
							commit("setTokens", {
								accessToken: data.accessToken,
								refreshToken: data.refreshToken,
								user: data.user,
							});
							commit("setLoginStatus", true);
							resolve(true);
						} else {
							reject(`Error: ${status}`);
						}
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		logout: ({ commit }, payload) => {
			return new Promise((resolve, reject) => {
				axios
					.post(`${process.env.VUE_APP_API_URL}/auth/logout`, payload, {skipAuthRefresh: true})
					.then(({ data, status }) => {
						if (status === 200) {
							commit("deleteTokens");
							commit("setLoginStatus", false);
							resolve(true);
						} else {
							reject(`Error: ${status}`);
						}
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		setTokens: ({ commit }, payload) => {
			commit("setTokens", payload);
		},
		register: ({ commit }, payload) => {
			return new Promise((resolve, reject) => {
				axios
					.post(`${process.env.VUE_APP_API_URL}/auth/signup`, payload, {skipAuthRefresh: true})
					.then(({ data, status }) => {
						console.log(data);
						if (status === 200) {
							commit("setTokens", {
								accessToken: data.accessToken,
								refreshToken: data.refreshToken,
								user: data.user,
							});
							commit("setLoginStatus", true);
							resolve(true);
						} else {
							reject(`Error: ${status}`);
						}
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		getAuthData: () => {
			return {
				accessToken: localStorage.getItem("ACCESS_TOKEN"),
				refreshToken: localStorage.getItem("REFRESH_TOKEN"),
				user: JSON.parse(localStorage.getItem("USER")),
			};
		},
	},
};

export default auth;
