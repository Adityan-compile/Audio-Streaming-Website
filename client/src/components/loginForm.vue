<template>
  <form class="text-white">
    <div class="mb-3">
      <label for="email" class="form-label">Email address:</label>
      <input
        type="email"
        v-bind="email"
        class="form-control"
        id="email"
        name="email"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password:</label>
      <input
        type="password"
        v-bind="password"
        class="form-control"
        id="password"
        name="password"
      />
    </div>
    <div class="p-3 pt-5">
      <button type="submit" class="btn btn-primary">Submit</button>
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
