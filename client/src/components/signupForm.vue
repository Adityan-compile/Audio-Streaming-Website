<template>
<div class="component p-5">
  <form>
    <p class="text-danger text-center">{{ message }}</p>
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="name" class="form-label">Name:</label>
        <input
          type="text"
          v-model="name"
          class="form-control text-input"
          id="name"
          name="name"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label for="email" class="form-label">Email address:</label>
        <input
          type="email"
          v-model="email"
          class="form-control text-input"
          id="email"
          name="email"
        />
      </div>
    </div>
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          v-model="password"
          class="form-control text-input"
          id="password"
          name="password"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label for="profilePicture" class="form-label">Profile Picture:</label>
        <input
          class="form-control file-input"
          type="file"
          id="profilePicture"
          ref="picture"
          accept="image/*"
        />
      </div>
    </div>
    <div class="p-3 pt-5">
      <button type="submit" class="btn btn-primary" @click.prevent="signup">
        Sign Up
      </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return { name: "", email: "", password: "", message: "" };
  },
  methods: {
    signup() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("picture", this.$refs.picture.files[0]);

      this.$store
        .dispatch("auth/register", formData)
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
          this.message = "Registration Error: Please try again later:";
          this.$router.push("/signup");
        });
    },
  },
};
</script>

<style scoped>
:root {
  --dark: #212529;
  --white: #fff;
} 

.text-input {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: var(--white);
}
.file-input {
  background: none;
  color: var(--white);
}
</style>