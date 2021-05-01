<template>
  <div class="home">
    <div style="position: relative;">
      <div class="row">
        <div class="col-md-6 text-center align-self-center">
          <img class="img-fluid pt-5" src="../assets/musician.png" />
        </div>
        <div class="col-md-6 align-self-center p-5 fw-bold text-center">
          <h1 class="logo-text text-white">Track Wiz</h1>
          <h5 class="text-white home-text">
            Listen To Music that awakens the inner musician in You.
          </h5>
        </div>
      </div>
    </div>

    <div v-if="!loggedIn" class="text-center">
      <button
        class="btn btn-outline-info rounded-pill fw-bold border mb-5 border-info border-2"
      >
        Get Track Wiz it's Free
      </button>
    </div>
    
   <div class="text-center" v-else>
           <button
        class="btn btn-outline-info rounded-pill fw-bold border mb-5 border-info border-2"
      >
        Go to Web Player
      </button>
   </div>


<hr class="bg-white "/>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      loggedIn: this.$store.state.loggedIn,
    };
  },
};
</script>

<style scoped>
.logo-text {
  font-size: 5rem;
}

.home-text {
  font-size: 3rem;
  font-family: "Sevillana", cursive;
}
</style>
