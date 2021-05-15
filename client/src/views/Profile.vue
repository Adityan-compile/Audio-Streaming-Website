<template>
	<div class="profile">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">PROFILE</h1>
			<UserCard v-bind:user="user"/>
			<Uploads />
		</div>
	</div>
</template>

<script>
import UserCard from "@/components/userCard.vue";
import Uploads from "@/components/uploads.vue";

export default {
	name: "Profile",
	data() {
		return {
			user: this.$store.state.auth.user || {},
		};
	},
	components: {
		UserCard,
		Uploads,
	},
};
</script>

<style scoped>
.profile {
	font-family: "Akaya Telivigala", cursive;
	font-weight: bold;
	color: #fff;
}
</style>
