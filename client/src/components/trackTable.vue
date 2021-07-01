<template>
  <div class="component">
    <div class="tracks table-responsive-sm pb-5 mb-5">
      <table class="table table-dark table-striped table-hover table-bordered box-shadow">
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
          <tr v-for="(track, idx) in tracks" :key="track._id">
            <th class="text-center align-middle" scope="row">
              {{ idx + 1 }}
            </th>
            <td class="text-center align-middle">
              <router-link class="text-white link" :to="`/about/${track._id}`">
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
              {{
                (track.artistName.length>15)
                  ? track.artistName.slice(0, 15)+ "..."
                  : track.artistName
              }}
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
              <button class="btn btn-danger" @click.prevent="remove(track._id)">
                Remove <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import emitter from "@/shared/bus.js";

export default {
  name: "TrackTable",
  props: {
    tracks: Array,
    playlistId: String
  },
  computed: {
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying", "getPaused"]),
    ...mapGetters('utils', ['getPage'])
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
    if(this.getPage === "Playlist"){
        this.$store
          .dispatch("playlists/remove", {
            song: songId,
            playlist: this.playlistId,
          })
          .then((res) => {
            emitter.emit("songRemove", res);
          })
          .catch((err) => {
            emitter.emit("songRemoveFailed", "Error Removing Song From Playlist !!");
          });
    }else if(this.getPage === "Profile"){
        this.$store
          .dispatch("audio/delete", songId)
          .then((res) => {
            emitter.emit("songDelete", res);
          })
          .catch((err) => {
            emitter.emit("songDeleteFailed", "Error Deleting Song");
          }); 
    }
    },
  },
};
</script>
