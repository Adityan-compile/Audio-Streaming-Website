<template>
  <div class="component p-5 pt-5">
    <h1 class="text-center p-5">PLAYLISTS</h1>

    <div class="p-3 d-flex align-items-center justify-content-center">
      <div class="row justify-content-center">
        <div
          class="col-sm-3 col-6 text-center p-3"
          v-for="(playlist, idx) in playlists"
          :key="idx"
        >
          <PlaylistCard v-bind:title="playlist" />
        </div>
        <div class="col-6 col-sm-3 text-center p-3">
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PlaylistCard from "../components/playlistCard.vue";

export default {
  name: "Playlists",
  components: {
    PlaylistCard,
  },
  setup() {
    let playlists = ref([
      "This is Dj Snake",
      "This is Selena Gomez",
      "This is Major Lazer",
      "This is Camila Cabello",
      "This is Zedd",
      "This is Marshmello",
      "This is Nucleya",
    ]);

    return {
      playlists,
    };
  },
};
</script>
