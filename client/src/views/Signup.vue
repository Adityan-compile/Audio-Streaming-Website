<template>
	<div class="login">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">Login</h1>
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
.login {
	font-family: "Akaya Telivigala", cursive;
	font-weight: bold;
	color: #fff;
}
</style>
