<template>
  <div class="home">
    <div style="position: relative;">
<div class="row">
    <div class="col-md-6 text-center align-self-center">
     <img class="img-fluid pt-5" src="../assets/musician.png">
  </div>
  <div class="col-md-6 align-self-center p-5 fw-bold text-center">
    <h1 class="logo-text text-white">Track Wiz</h1>
   <h5 class="text-white home-text"> Listen To Music and awaken the inner Music Nerd in You.</h5> 
  </div>
</div>
</div>

    <div v-if="loggedIn"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      loggedIn: this.$store.state.loggedIn,
    };
  }
};
</script>

<style scoped>

.logo-text{
  font-size: 5rem;
}

.home-text{
  font-size: 3rem;
  font-family: 'Sevillana', cursive;
}
</style>