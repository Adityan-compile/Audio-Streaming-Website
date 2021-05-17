<template>
  <div class="home">
    <div style="position: relative;">
      <div class="row">
        <div class="col-md-6 text-center align-self-center">
          <img class="img-fluid pt-5" src="../assets/musician.png" />
        </div>
        <div class="col-md-6 align-self-center p-5 fw-bold text-center">
          <h1 class="logo-text text-white pt-4">Track Wiz</h1>
          <h5 class="text-white home-text pt-3">
            Listen To Music that awakens the inner musician in You.
          </h5>
        </div>
      </div>
    </div>

    <!--     <div v-if="loggedIn === true" class="text-center">
      <router-link
        class="btn btn-outline-info rounded-pill fw-bold border mb-5 border-info border-2"
        to="/signup"
      >
        Get Track Wiz it's Free
      </router-link>
    </div>
   <div class="text-center" v-else>
           <router-link
        class="btn btn-outline-danger rounded-pill fw-bold border mb-5 border-danger border-2"
        to="/player"
      >
        Go to Web Player
      </router-link>
   </div> -->

    <div class="text-center" >
            <router-link
            v-if="isLoggedIn"
        class="btn btn-outline-danger rounded-pill fw-bold border mb-5 border-danger border-2"
        to="/player"
      >
        Go to Web Player
      </router-link>

      <router-link
        class="btn btn-outline-info rounded-pill fw-bold border mb-5 border-info border-2"
        to="/signup"
        v-else
      >
        Get Track Wiz it's Free
      </router-link>

    </div>

    <hr class="bg-white" />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import store from "@/store/index";
import { mapGetters, mapState } from 'vuex';


export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      loggedIn: store.state.auth.loggedIn,
    };
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  } 
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
