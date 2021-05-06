<template>
  <form>

        <p class="text-danger text-center">{{ message }}</p>


    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="name"
        name="name"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address:</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="email"
        name="email"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password:</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="password"
        name="password"
      />
    </div>
    <div class="p-3 pt-5">
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    signUp: () => {
      this.$store
        .dispatch("auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
          this.message = "Register Error: Please try again later:";
          this.$router.push("/signup");
        });
    },
  },
};
</script>

<style scoped>
.form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: #fff;
}
</style>
