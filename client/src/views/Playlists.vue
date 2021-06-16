<template>
  <div class="component playlists p-5 pt-5">
    <h1 class="text-center p-3 pt-5">PLAYLISTS</h1>
   
    <p class="text-danger text-center">{{ error }}</p>

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
          <PlaylistCard v-bind:title="playlist" />
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

    let playlists = ref([]);

    let error = ref("");

    function fetchPlaylists(){
        store.dispatch("playlists/fetchPlaylists").then((res)=>{
            if(res.length === 0){
                error.value = "No Playlists !!";
                playlists.value = [];
            }else{
                playlists.value = res;
            }
        }).catch(err=>{
            error.value = "Error Fetching Playlists !!"
        });
    }

    onMounted(()=>{
      fetchPlaylists()
    })

    return {
      playlists,
      fetchPlaylists,
      error
    };
  },
};
</script>
