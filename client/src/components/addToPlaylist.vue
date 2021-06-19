<template>
    <div class="component">
        <button class="btn btn-warning text-danger" data-bs-toggle="modal" data-bs-target="#playlistsModal">Add To Playlist <i class="fas fa-music"></i> </button>

<div class="modal fade" id="playlistsModal" tabindex="-1" aria-labelledby="title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="title">Add To Playlist</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<select class="form-select bg-dark text-white" aria-label="Default select example" v-model="selectedPlaylist">
  
  <option selected disabled hidden>Select Playlist</option>

  <option v-for="playlist in data" :key="playlist._id" :value="playlist._id">{{ playlist.title }}</option>
</select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Add To Playlist</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  export default {
      name: "AddToPlaylist",
      data(){
          return{
              selectedPlaylist: "",
          }
      },    
      props: {
          data: Array,
          song: String
      }
  };
</script>