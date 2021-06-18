<template>
  <div class="component">
    <figure
      class="figure"
      role="button"
      @click.prevent="show"
      data-bs-toggle="modal"
      data-bs-target="#newPlaylistModal"
    >
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
<div>
    <div
      v-show="hidden"
      class="modal fade text-white"
      id="newPlaylistModal"
      ref="modal"   
      tabindex="-1"
      aria-labelledby="modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">New Playlist</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title" class="form-label text-left"
                >Title</label
              >
              <input
                type="text"
                class="form-control text-input bg-dark border-bottom text-white"
                id="title"
                placeholder="World's Greatest Music !!"
                required
                v-model="title"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              ref="close"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click.prevent="createPlaylist">
              Create New Playlist
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import emitter from "@/shared/bus";

export default {
  name: "NewPlaylist",
  data() {
      return {
          title: "",
          hidden: true,
      }
  },
  methods: {

      show(){
          this.hidden = false;
      },
      
      createPlaylist(){
          this.$store.dispatch("playlists/newPlaylist", this.title).then((res)=>{
            this.$refs.close.click();
            emitter.emit("PlaylistCreationSuccess", true);
          }).catch(err=>{
             this.$refs.close.click();
             emitter.emit("PlaylistCreationError", false);
          });
      }
  },
};
</script>
