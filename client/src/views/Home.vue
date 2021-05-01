<template>
  <div class="home container">
    <div v-if="loggedIn">
      
    </div>
    <div v-else>
      
    </div>
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
</style>