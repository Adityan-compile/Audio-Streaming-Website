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
          <label for="profilePicture" class="form-label"
            >Profile Picture:</label
          >
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
          Edit Profile
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProfileForm",
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