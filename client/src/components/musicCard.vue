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
            v-bind:title="data.title"
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
        <div class="col-md-1 p-3">
          <i
            role="button"
            class="fa fa-play-circle play align-middle"
            @click.prevent="play"
            title="Play/Pause"
          ></i>
        </div>
        <div class="col-md-1 p-3">
          <i
            role="button"
            class="fa fa-info-circle info align-middle"
            title="Info"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import emitter from "@/shared/bus";

export default {
  name: "MusicCard",
  data() {
    return {
      staticUrl: process.env.VUE_APP_IMAGES_URL,
    };
  },
  mounted() {},
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
      } else if (this.getPlayingId === this.data._id) {
        this.$store.dispatch("audio/pause");
      } else {
        this.$store.dispatch("audio/play", this.data);
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
.info {
  font-size: 3.5rem;
}

.play {
  font-size: 3.5rem;
}

.play:hover {
  transform: scale(1.2);
}
.info:hover {
  transform: scale(1.2);
}

.thumbnail:hover {
  transform: scale(1.2);
}
</style>
