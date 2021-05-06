<template>
	<div class="signup">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">Join Us</h1>
			<div class="container">
				<SignUpForm />
			</div>
		</div>
	</div>
</template>

<script>
import SignUpForm from "@/components/signUpForm.vue";

export default {
	components: {
		SignUpForm,
	},
};
</script>

<style scoped>
.signup {
	font-family: "Akaya Telivigala", cursive;
	font-weight: bold;
	color: #fff;
}
</style>
