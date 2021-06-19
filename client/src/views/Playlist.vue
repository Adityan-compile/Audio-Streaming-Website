<template>
  <div class="component p-5">
    <div class="container">
      <h1 class="text-center p-3 pt-5">{{ playlist.title || "PLAYLIST" }}</h1>
      <p class="text-danger text-center">{{ error }}</p>

      <div class="tracks table-responsive-sm">
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
                <img
                  :src="`/assets/images/${track.image}`"
                  alt="Image"
                  width="70"
                  height="70"
                />
              </td>
              <td class="text-center align-middle">{{ track.title }}</td>
              <td class="text-center align-middle">
                {{ track.artistName.slice(0, 15) }}...
              </td>
              <td class="text-center align-middle h3">
                <i
                  class="fa fa-play"
                  role="button"
                  @click.prevent="play(track)"
                  title="play/pause"
                ></i>
              </td>
              <td class="text-center align-middle">
                <a class="btn btn-danger">Remove</a>
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
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying"]),
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
