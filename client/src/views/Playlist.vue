<template>
  <div class="component">
    <div class="container">
      <h1 class="text-center p-3 pt-5 mt-5">{{ playlist.title || "PLAYLIST" }}</h1>
      <p class="text-danger text-center">{{ error }}</p>
      <div class="pb-5 mb-3">
        <button class="btn btn-danger" style="float:right" @click.prevent="deletePlaylist">Delete Playlist</button>
      </div>

      <div class="tracks table-responsive-sm pb-5 mb-5">
        <table
          class="table table-dark table-striped table-hover table-bordered"
        >
          <thead>
            <tr>
              <th scope="col" class="text-center align-middle">#</th>
              <th scope="col" class="text-center align-middle">Image</th>
              <th scope="col" class="text-center align-middle">Title</th>
              <th scope="col" class="text-center align-middle">Artist</th>
              <th scope="col" class="text-center align-middle">Play/Pause</th>
              <th scope="col" class="text-center align-middle">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, idx) in playlist.tracks" :key="track._id">
              <th class="text-center align-middle" scope="row">
                {{ idx + 1 }}
              </th>
              <td class="text-center align-middle">
                <router-link
                  class="text-white link"
                  :to="`/about/${track._id}`"
                >
                  <img
                    :src="`/assets/images/${track.image}`"
                    alt="Image"
                    width="70"
                    height="70"
                    class="rounded shadow"
                    crossorigin="anonymous"
                  />
                </router-link>
              </td>
              <td class="text-center align-middle">
                <router-link
                  class="text-white link"
                  :to="`/about/${track._id}`"
                  >{{ track.title }}</router-link
                >
              </td>
              <td class="text-center align-middle">
                {{ (track.artistName) ? track.artistName.slice(0, 15) : track.artistName }}...
              </td>
              <td class="text-center align-middle h3">
                <i
                  class="fa fa-play align-middle p-2"
                  role="button"
                  @click.prevent="play(track)"
                  title="play/pause"
                ></i>
              </td>
              <td class="text-center align-middle">
                <button
                  class="btn btn-danger"
                  @click.prevent="remove(track._id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Playlist",
  data() {
    return {
      playlist: {},
      error: "",
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying", "getPaused"]),
  },
  methods: {
    play(track) {
      if (!this.getIsPlaying) {
        this.$store.dispatch("audio/play", track);
      } else if (this.getPlayingId === track._id) {
        this.$store.dispatch("audio/pause");
      } else {
        this.$store.dispatch("audio/play", track);
      }
    },
    remove(songId) {
      this.$store
        .dispatch("playlists/remove", {
          song: songId,
          playlist: this.playlist._id,
        })
        .then((res) => {
           this.playlist = res
        })
        .catch((err) => {
          this.error = "Error Removing Song From Playlist !!"
        });
    },
    deletePlaylist(){
      this.$store.dispatch("playlists/delete", this.playlist._id).then((res)=>{
        this.$router.push("/playlists");
      }).catch(err=>{
        this.error = "Failed to Delete Playlist !!";
      });
    },
  },
  mounted() {
    this.$store
      .dispatch("playlists/fetchPlaylist", this.id)
      .then((res) => {
        if (Object.keys(res).length === 0)
          return (this.error = "Playlist Not Found !!");
        this.error = "";
        this.playlist = res;
      })
      .catch((err) => {
        this.error = "Error Fetching Playlist !!";
      });
  },
};
</script>

<style scoped>
.ellipsis {
  text-overflow: ellipsis ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.tracks::-webkit-scrollbar {
  background: none;
}
</style>
