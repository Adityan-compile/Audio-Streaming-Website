import { createStore } from "vuex";

export default createStore({
	state: {
		loggedIn: true,
		accessToken: '',
		refreshToken: ''
	},
	mutations: {},
	actions: {
		setAccessToken() {
			localStorage.accessToken = this.$store.state.accessToken;
		},
		setRefreshToken() {
			localStorage.refreshToken = this.$store.state.refreshToken;
		},
		getAccessToken() {
			return localStorage.accessToken;
		},
		getRefreshToken() {
			return localStorage.refreshToken;
		},
	},
	modules: {},
});
