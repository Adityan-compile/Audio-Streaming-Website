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
   </div>
<hr class="bg-white "/>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import store from "@/store/index"
import { mapState } from "vuex"


console.log(store.state.auth.loggedIn);

export default {
  name: "Home",
  components: {
    Footer,
  },
  computed(){
    return{
        ...mapState('auth/auth', ['loggedIn', 'user'])
    }
  },
  data() {
    return {
      loggedIn: store.state.auth.loggedIn,
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
