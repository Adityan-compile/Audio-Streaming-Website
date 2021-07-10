<template>
  <div class="card shadow rounded bg-dark text-center d-flex">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-3">
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
            crossorigin="anonymous"
          >
            <img src="../assets/default.png" class="thumbnail" crossorigin="anonymous" />
          </object>
        </div>
        <div class="col-lg-3 p-3">
          <router-link
            class="align-middle card-text text-white link"
            v-bind:to="`/about/${data._id}`"
            >{{ data.title }}</router-link
          >
        </div>
        <div class="col-lg-2 p-3">
          <span class="align-middle card-text">{{ data.artistName }}</span>
        </div>
        <div class="col-lg-2 p-3">
          <span class="align-middle card-text">{{ data.yearCreated }}</span>
        </div>
        <div class="col-lg-2 p-3">
          <div
            class="d-flex flex-nowrap align-items-center justify-content-center"
          >
            <i
              role="button"
              :class="getBtnState"
              @click.prevent="play"
              title="Play/Pause"
            ></i>
            <router-link v-bind:to="`/about/${data._id}`" class="text-white">
              <i
                role="button"
                class="fa fa-info-circle info align-middle p-2"
                title="Info"
              ></i>
            </router-link>
          </div>
        </div>
        <!-- <div class="col-md-1 p-3">
            <router-link v-bind:to="`/about/${data._id}`" class="text-white">
              <i
                role="button"
                class="fa fa-info-circle info align-middle"
                title="Info"
              ></i>
            </router-link>
        </div> -->
      </div>
    </div>
  </div>
  <!-- {
                'fa fa-pause-circle play align-middle p-2': !getPaused && getPlayingId === data._id,
                'fa fa-play-circle play align-middle p-2': getPaused,
                'fa fa-play-circle play align-middle p-2': getPaused && getPlayingId != data._id,
                'fa fa-play-circle play align-middle p-2': !getPaused && getPlayingId != data._id,
              } -->
</template>

<script>
import { mapGetters } from "vuex";
import emitter from "@/shared/bus";

export default {
  name: "MusicCard",
  data() {
    return {
      staticUrl: process.env.VUE_APP_IMAGES_URL,
      playing: "fa fa-pause-circle",
      paused: "fa fa-play-circle",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters("audio", ["getPlayingId", "getIsPlaying", "getPaused"]),
    getBtnState: function () {
      let btnState = "fa fa-play-circle play align-middle p-2";
      if (this.getIsPlaying && this.getPlayingId === this.data._id) {
        btnState = "fa fa-pause-circle play align-middle p-2";
      } else if (this.getIsPlaying && this.getPlayingId != this.data._id) {
        btnState = "fa fa-play-circle play align-middle p-2";
      }
      return btnState;
    },
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
.info:hover {
  transform: scale(1.2);
}

.thumbnail:hover {
  transform: scale(1.2);
}
.link {
  text-decoration: none;
}
</style>
