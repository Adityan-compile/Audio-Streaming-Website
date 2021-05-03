<template>
  <form>
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
      <button type="submit" @click.prevent="login" class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(){
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(res=>{
        this.router.push("/")
      }).catch(err => {
        console.error(err);
        this.$alert("Error");
        this.router.push("/login");
      })
    }
  }
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
