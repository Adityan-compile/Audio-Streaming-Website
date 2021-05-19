<template>
  <div class="signup component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">Join Us</h1>
      <div class="container">
        <SignupForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/signupForm.vue';

export default {
  components: {
    SignupForm,
  },
};
</script>
