<template>
  <div class="card shadow rounded bg-dark text-center d-flex">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <object
            :data="staticUrl + '/' + data.image"
            type="image/jpeg"
            height="100px"
            width="100px"
            class="thumbnail shadow rounded"
            loading="lazy"
            @click.prevent="play"
            role="button"
          >
            <img src="../assets/default.png" class="thumbnail" />
          </object>
        </div>
        <div class="col-md-3 p-3">
          <span class="align-middle card-text">{{ data.title }}</span>
        </div>
        <div class="col-md-2 p-3">
          <span class="align-middle card-text">{{ data.artistName }}</span>
        </div>
        <div class="col-md-2 p-3">
          <span class="align-middle card-text">{{ data.yearCreated }}</span>
        </div>
        <div class="col-md-2 p-3">
          <i
            v-bind:class="{
              'fa fa-play-circle play align-middle': getPlayingId != data._id,
              'fa fa-pause-circle play align-middle': getPlayingId === data._id && getIsPlaying,
            }"
            role="button"
            @click.prevent="play"
          ></i>
        </div>
      </div>
    </div>
  </div>
                <!--
                   'fa fa-play-circle play align-middle': getPlayingId != data._id && !getIsPlaying, 
                    Add to Computed Styles if required
                -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MusicCard",
  data() {
    return {
      staticUrl: process.env.VUE_APP_IMAGES_URL,
    };
  },
  computed: {
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying"]),
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    play() {
      if (!this.getIsPlaying) {
        this.$store.dispatch("audio/play", this.data);
      } else {
        this.$store.dispatch("audio/pause");
      }
    },
  },
};
</script>

<style scoped>
.thubmnail {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
.play {
  font-size: 4rem;
}

.play:hover {
  transform: scale(1.2);
}

.thumbnail:hover {
  transform: scale(1.2);
}
</style>
