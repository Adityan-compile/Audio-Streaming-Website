import axios from "axios";

const utils = {
	namespaced: true,
	state: {
		prevQuery: "",
	},
	getters: {},
	mutations: {
		setPrevQuery(state, query){
			state.prevQuery = query;
		}
	},
	actions: {
		search({ commit }, query) {
			return new Promise((resolve, reject) => {
				axios.get(`${process.env.VUE_APP_API_URL}/search?query=${query}`, { skipAuthRefresh: true })
					.then(({data, status}) => {
						if (status === 200) {
							commit('setPrevQuery', query);
							resolve(data.results);
						}else{
							console.log(status)
							reject(`Error: ${status}`);
						}
					}).catch((err)=>{
						reject(err);
					});
			});
		},
	},
};


export default utils;