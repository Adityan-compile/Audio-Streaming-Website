<template>
	<div class="search">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">SEARCH</h1>
			<searchBar />
		</div>
	</div>
</template>

<script>
import searchBar from "@/components/searchBar.vue";

export default {
	name: "Search",
	components: {
		searchBar,
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
