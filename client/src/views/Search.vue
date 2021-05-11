<template>
	<div class="search">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">SEARCH</h1>
			<p class="text-danger text-center">{{ errorMessage }}</p>
			<searchBar @Search="search" />
			<div class="results">
				<span v-for="result in results" v-bind:key="result._id">
					<musicCard v-bind:data="result" />
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import searchBar from "@/components/searchBar.vue";
import musicCard from "@/components/musicCard.vue";
import axios from "axios";

export default {
	name: "Search",
	data() {
		return {
			results: [],
			errorMessage: '',
		};
	},
	methods: {
		search(query){
			this.$store.dispatch('utils/search', query).then((res)=>{
				if(res.length == 0){
					this.errorMessage = "No Results !!!"
				}else{
					this.results = res;
				}
			}).catch((err)=>{
				console.error(err);
				this.errorMessage = "Search Error"
			});
		}
	},
	components: {
		searchBar,
		musicCard,
	},
};
</script>

<style scoped>
.search {
	font-family: "Akaya Telivigala", cursive;
	font-weight: bold;
	color: #fff;
}
</style>
