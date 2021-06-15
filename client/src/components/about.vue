<template>
  <div class="component p-5 text-center fw-bold">
    <div class="container row">
      <div class="col-md-6 p-2">
        <div class="align-self-center">
          <img
            :src="`/assets/images/${data.image}`"
            class="figure-img img-fluid shadow rounded-3"
          />
        </div>
      </div>
      <div class="col-md-6 align-self-center p-2">
        <h1 class="p-2">{{ data.title }}</h1>
        <h5 class="lead">- {{ data.artistName }}</h5>
        <h5 class="lead">Released: {{ data.yearCreated }}</h5>
        <button class="btn btn-warning text-danger">Add To Playlist <i class="fas fa-music"></i> </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AboutSong",
  props: {
    data: {
      type: Object,
      required: true,
    },
    computed: {
      ...mapGetters("audio", ["getPlayingId", "getIsPlaying"]),
    },
  },
};
</script>
