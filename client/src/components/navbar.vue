<template>
<div class="nav">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <div class="logo-text">
          <h3>Track Wiz</h3>
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars fw-bold"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-monospace">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/search" v-if="loggedIn">SEARCH</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/browse" v-if="loggedIn">BROWSE</router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/playlists"
              >PLAYLISTS</router-link
            >
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/tracks/new"
              >NEW TRACK</router-link
            >
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/player"
              >PLAYER</router-link
            >
          </li>
        </ul>
        <div v-if="loggedIn">
          <div class=" nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-muted"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              Account
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
              <li>
                <router-link class="dropdown-item" to="/user/profile"
                  >Profile</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/playlists"
                  >Playlists</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" @click.prevent="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">LOGIN</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">SIGNUP</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {{ loggedIn }}
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
  name: 'Navbar',
  data() {
    return {};
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/logout').then(res=>{
        if(res){
          location.replace("/");
        }else{
         alert("Logout Failed");
        }
      }).catch(err=>{
        alert("Logout Failed");
      });
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapState('auth', ['loggedIn'])
  },
};
</script>

<style scoped>
.logo-text {
  font-weight: bold;
  font-size: 1.7rem;
}

.nav-item {
  font-weight: bold;
  font-size: 1rem;
}

.nav-item:hover {
  transform: scale(1.03);
}

.dropdown {
  margin-right: 3rem;
}

.nav-link {
  font-family: 'Akaya Telivigala', cursive;
}
</style>
