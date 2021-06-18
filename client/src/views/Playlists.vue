<template>
  <div class="component playlists p-5 pt-5">
    <h1 class="text-center p-3 pt-5">PLAYLISTS</h1>

    <p class="text-danger text-center">{{ error }}</p>
    <p class="text-success text-center">{{ success }}</p>

    <div class="row">
      <div class="col-6 col-sm-3 col-md-3 text-center p-3">

       <new-playlist />

      </div>
      <div
        class="col-sm-3 col-6 text-center p-3"
        v-for="(playlist, idx) in playlists"
        :key="idx"
      >
        <playlist-card v-bind:title="playlist.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import store from "@/store/index";
import emitter from "@/shared/bus";
import PlaylistCard from "@/components/playlistCard.vue";
import NewPlaylist from "@/components/newPlaylist.vue";

export default {
  name: "Playlists",
  components: {
    PlaylistCard,
    NewPlaylist
  },

  setup() {
    let playlists = ref([]);

    let error = ref("");
    let success = ref("");


    function fetchPlaylists() {

     console.log("Fetching Playlists");

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

      emitter.on("PlaylistCreationSuccess", (status)=>{
        fetchPlaylists();
        error.value = ""
        success.value = "Playlist Created Successfully !!"
      });
      emitter.on("PlaylistCreationSuccess", (status)=>{
        success.value = "";
        error.value = "Playlist Creation Error";
      })

    });

    return {
      playlists,
      fetchPlaylists, 
      error,
      success
    };
  },
};
</script>
