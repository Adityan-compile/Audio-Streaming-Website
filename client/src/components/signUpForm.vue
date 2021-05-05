<template>
  <form>
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
  <!--   <div class="mb-3">
      <label for="confirmPassword" class="form-label">Confirm Password:</label>
      <input
        type="password"
        v-model="confirmPassword"
        class="form-control"
        id="confirmPassword"
        name="confirmPassword"
      /> 
    </div> -->
    <div class="p-3 pt-5">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      name : "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
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
