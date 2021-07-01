<template>
  <div class="component">
    <div class="container">
      <h1 class="text-center p-3 pt-5 mt-5">
        {{ playlist.title || "PLAYLIST" }}
      </h1>
      <p class="text-danger text-center">{{ error }}</p>
      <div class="pb-5 p-5 mb-3" style="float: right">
        <span class="p-2">
          <button
            class="btn btn-success"
            @click.prevent="playAll"
          >
            Play All <i class="fa fa-play"></i>
          </button>
        </span>
        <span class="p-2">
          <button
            class="btn btn-danger"
            @click.prevent="deletePlaylist"
          >
            Delete Playlist <i class="fa fa-trash"></i>
          </button>
        </span>
      </div>

      <Track-Table :tracks="playlist.tracks" :playlistId="id" />

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TrackTable from "@/components/trackTable.vue";
import emitter from "@/shared/bus.js";

export default {
  name: "Playlist",
  data() {
    return {
      playlist: {},
      error: "",
    };
  },
  components: {
    TrackTable,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying", "getPaused"]),
  },
  methods: {
    playAll(){
      if(this.playlist.tracks.length === 0) return this.error = "No Songs in Playlist !!";
      this.$store.dispatch('queue/playAll', this.playlist.tracks);
    },
    fetchPlaylist() {
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
          this.playlist = res;
        })
        .catch((err) => {
          this.error = "Error Removing Song From Playlist !!";
        });
    },
    deletePlaylist() {
      this.$store
        .dispatch("playlists/delete", this.playlist._id)
        .then((res) => {
          this.$router.push("/playlists");
        })
        .catch((err) => {
          this.error = "Failed to Delete Playlist !!";
        });
    },
  },
  mounted() {
    this.fetchPlaylist();

    emitter.on("songRemove", (res) => {
      this.error = "";
      this.playlist = res;
    });
    emitter.on("songRemoveFailed", (res) => {
      this.error = res;
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
