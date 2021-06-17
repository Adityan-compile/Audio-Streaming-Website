<template>
  <div class="component playlists p-5 pt-5">
    <h1 class="text-center p-3 pt-5">PLAYLISTS</h1>

    <p class="text-danger text-center">{{ error }}</p>

    <div class="search p-3">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search Playlists !!"
          aria-label="Search Playlists"
          v-model="query"
          @keyup="search"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click.prevent="search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-3 col-md-3 text-center p-3">
        <figure class="figure">
          <img
            src="../assets/new-playlist.png"
            class="figure-img img-fluid"
            width="100"
            height="100"
            alt="New Playlist"
            role="button"
          />
          <p class="figure-caption text-white">New Playlist</p>
        </figure>
      </div>
      <div
        class="col-sm-3 col-6 text-center p-3"
        v-for="(playlist, idx) in playlists"
        :key="idx"
      >
        <PlaylistCard v-bind:title="playlist" ref="playlist" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import store from "@/store/index";
import PlaylistCard from "../components/playlistCard.vue";

export default {
  name: "Playlists",
  components: {
    PlaylistCard,
  },

  setup() {
    let playlists = ref(["This is Dj Snake", "This is Selena Gomez"]);

    let error = ref("");

    let query = ref("");

    let searchCandidates = playlists.value;

    function search() {
      let queryRegex = new RegExp(query, "i");
      let searchResults = searchCandidates.filter((playlist) => {
        return queryRegex.test(playlist);
      });

      console.log(searchResults);
    }

    function fetchPlaylists() {
      store
        .dispatch("playlists/fetchPlaylists")
        .then((res) => {
          if (res.length === 0) {
            error.value = "No Playlists !!";
            playlists = [];
          } else {
            playlists.value = res;
          }
        })
        .catch((err) => {
          error.value = "Error Fetching Playlists !!";
        });
    }

    onMounted(() => {
      fetchPlaylists();
    });

    return {
      playlists,
      fetchPlaylists,
      error,
      query,
      search,
    };
  },
};
</script>
