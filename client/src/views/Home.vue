<template>
  <div class="home component">
    <div>
      <div class="row">
        <div class="col-md-6 text-center align-self-center">
          <img class="img-fluid pt-5" src="../assets/musician.png" />
        </div>
        <div
          class="col-md-6 align-self-center p-5 pt-5 fw-bold text-center typewriter"
        >
          <h1 class="logo-text text-white pt-5 typewriter-text" ref="title">
            Track Wiz
          </h1>
          <h5 class="text-white home-text pt-3">
            Listen To Music that Awakens the Inner Musician in You.
          </h5>
        </div>
      </div>
    </div>

    <div class="text-center">
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

    <CookieConsent v-if="!hidden" @hide="Hide" />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import CookieConsent from "@/components/cookieConsent";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Footer,
    CookieConsent,
  },
  data() {
    return {
      loggedIn: this.$store.state.auth.loggedIn,
      hidden: this.$store.state.user.hidden || false,
    };
  },
  methods: {
    Hide() {
      this.hidden = true;
      this.$store.commit("user/setConsent", true);
    },
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
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

.typewriter {
  font-family: Courier, monospace;
  display: inline-block;
}

.typewriter-text {
  display: inline-block;
  overflow: hidden;
  letter-spacing: 2px;
  animation: typing 5s steps(30, end);
  white-space: nowrap;
  font-size: 5rem;
  font-weight: 700;
  box-sizing: border-box;
}

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
