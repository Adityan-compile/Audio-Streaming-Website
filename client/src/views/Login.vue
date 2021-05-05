<template>
	<div class="login">
		<div class="container p-5">
			<h1 class="text-center pt-5 p-3">LOGIN</h1>
			<div class="container">
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script>
import LoginForm from "@/components/loginForm.vue";

export default {
	components: {
		LoginForm,
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
