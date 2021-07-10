<template>
  <div class="music-player component box-shadow sticky-bottom">
    <div class="card-footer fixed-bottom bg-dark border-top">
      <div class="d-flex flex-row justify-content-start align-items-center">
        <div class="p-1">
          <object
            v-bind:data="`/assets/images/${getPlaying.image}`"
            type="image/jpeg"
            height="70px"
            width="70px"
            ref="thumbnail"
            class="thumbnail align-self-center shadow rounded"
            v-bind:key="key"
            crossorigin="anonymous"
          >
            <img
              height="70px"
              width="70px"
              ref="thumbnail"
              class="thumbnail align-self-center shadow rounded"
              src="/assets/images/60a3c4c7a557bb0fdc2c0291-60ba33addac02b2f0d93d5f0-takij.peg"
              crossorigin="anonymous"
            />
          </object>
        </div>
        <div class="d-flex flex-column flex-grow w-100 justify-content-between">
          <div class="mt-2 me-auto">
              <div>{{ getPlaying.title }}</div>
              <div>{{ getPlaying.artistName }}</div>
          </div>
            <!-- <div class="ms-auto">
              <i class="fas fa-redo p-2"></i>
              <i class="fa fa-heart p-2"></i>
            </div>  -->
          <div class="p-2">
            <audio
              controls
              ref="player"
              class="align-self-center shadow rounded-pill flex-grow w-100 audio bg-dark"
              controlsList="nodownload"
              crossorigin="use-credentials"
              @pause="pause"
              @play="play"
              @ended="end"
            >
              <source
                v-bind:src="`/streams/audio/${getPlaying.audio}`"
                type="audio/mp3"
              />
              <p class="text-center">
                Your Browser Does not Support HTML5 Audio Playback.
              </p>
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/shared/bus";
import { mapGetters } from "vuex";

export default {
  name: "MusicPlayer",
  data() {
    return {
      playing: this.$store.state.audio.isPlaying || false,
      muted: false,
      key: 1,
      imageUrl: "/assets/images",
      audioUrl: "/streams/audio",
    };
  },
  computed: {
    ...mapGetters("audio", ["getPlaying", "getIsPlaying"]),
  },
  mounted() {
    let forceRender = this.forceRender;
    let player = this.$refs.player;
    let playing = this.playing;
    emitter.on("stateChange", (change) => {
      if (change === "play") {
        playing = true;
        forceRender();
        player.load();
        player.play();
      } else if (change === "playCurrent") {
        playing = true;
        forceRender();
        player.play();
      } else {
        playing = false;
        player.pause();
        forceRender();
      }
    });
  },
  methods: {
    forceRender() {
      this.key += 1;
    },
    pause() {
      this.playing = false;
      this.$store.dispatch("audio/pause");
    },
    play() {
      this.playing = true;
      this.$store.dispatch("audio/play");
    },
    end() {
      this.playing = false;
      this.$store.dispatch("queue/ended", this.getPlaying);
    },
  },
};
</script>

<style scoped>
.audio::-webkit-media-controls-panel {
  background-color: #e4e4e4;
}
.audio {
  height: 40px;
}
</style>
