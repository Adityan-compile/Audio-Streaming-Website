<template>
	<div class="search">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">SEARCH</h1>
			<searchBar />
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

export default {
	name: "Search",
	data() {
		return {
			results: [
				{
					_id: "340329487",
					title: "Never Gonna Give You Up",
					artist: "Rick Astley",
					image: "https://dazedimg-dazedgroup.netdna-ssl.com/830/azure/dazed-prod/1150/0/1150228.jpg"
				},
			],
		};
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
