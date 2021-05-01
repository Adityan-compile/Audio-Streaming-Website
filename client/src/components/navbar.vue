<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <div class="logo-text">
          <h3>Track Wiz</h3>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-monospace">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SEARCH</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BROWSE</a>
          </li>
                    <li class="nav-item" v-if="loggedIn">
            <a class="nav-link" href="#">PLAYLISTS</a>
          </li>
        </ul>
        <div v-if="!loggedIn"></div>
        <div v-else>
          <li class="nav-item dropdown">
            <a
              class="nav-link text-white dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Playlists</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      loggedIn: this.$store.state.loggedIn,
    };
  },
};
</script>

<style scoped>
.logo-text {
  font-size: 1.7rem;
}

.nav-item {
  font-weight: bold;
  font-size: 1rem;
}

.nav-item:hover {
  font-size: 1.1rem;
}

.dropdown{
  margin-right: 3rem;
}

.nav-link{
  font-family: 'Akaya Telivigala', cursive;
}

</style>
