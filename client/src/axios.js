import axios from "axios";

let instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

instance.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('ACCESS_TOKEN')}`;

// instance.interceptors.response.use(res =>{
// 	return res;
// }, err =>{
// })


instance.interceptors.response.use((res)=>{
	return res;
}, async(err)=>{
	console.error(err);
	let req = err.config;
	if(err.response.status === 401 && req.url.includes("auth/tokens/refresh")){
		this.$store.commit("auth/clearState");
		this.$router.push("/login");
		return Promise.reject(err);
	} else if(err.response.status === 401 && !req._retry){
		req._retry = true;
		let refresh = await this.$store.dispatch("auth/regenerateToken", {
			refreshToken: localStorage.getItem("REFRESH_TOKEN")
		})
		if(refresh === true){
			return instance(req);
		}else{
			return Promise.reject(err);
		}
	}
});

export default instance;