<template>
	<div class="player">
		<div class="greeting p-5">
			<h1 class="pt-5">Good {{ time }} ,</h1>
		</div>
		<div class="artists ps-2">
			<h1 class="ps-5">Artists</h1>
			<p class="text-warning">{{ artistError }}</p>
		</div>
	</div>
</template>

<script>
import getTime from "@/shared/time.js";
export default {
	name: "Player",
	data() {
		return {
			time: "",
			artists: "",
			artistError: "",
		};
	},
	created() {
		var hour = new Date().getHours();
		if (hour < 12) {
			this.time = "Morning";
		} else if (hour < 18) {
			this.time = "Afternoon";
		} else {
			this.time = "Evening";
		}

		this.$store.dispatch("utils/getArtists").then((artists)=>{
			this.artists = artists;
		}).catch((err)=>{
			this.artistError = "We can't fetch Artists at this time hang in there !!"
			console.error(err);
		});
	},
};
</script>

<style scoped>
.player {
	font-family: "Akaya Telivigala", cursive;
	font-weight: bold;
	color: #fff;
}
</style>
