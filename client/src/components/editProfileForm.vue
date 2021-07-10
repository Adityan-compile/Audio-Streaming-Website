<template>
  <div class="component">
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
        <div class="mb-3 col">
          <label for="password" class="form-label">Password:</label>
          <input
            type="password"
            v-model="password"
            placeholder="**********"
            class="form-control text-input"
            id="password"
            name="password"
          />
        </div>
      </div>
      <div class="p-3 pt-5">
        <button type="submit" class="btn btn-primary" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "EditProfileForm",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  created() {
    this.name = this.user.name;
    this.email = this.user.email;
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    updateProfile(){
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);

      this.$store
        .dispatch("user/updateProfile", formData)
        .then((res) => {
          this.$router.push("/user/profile");
        })
        .catch((err) => {
          console.error(err);
          this.error = "Registration Error: Please try again later:";
        });
    }
  }
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