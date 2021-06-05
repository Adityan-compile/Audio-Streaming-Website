<template>
  <div class="music-player component box-shadow sticky-bottom">
    <div class="card-footer fixed-bottom bg-dark">
      <div class="d-flex flex-row justify-content-start align-items-center">
        <div class="p-1">
          <object
            v-bind:data="`/assets/images/${getPlaying.image}`"
            type="image/jpeg"
            height="70px"
            width="70px"
            ref="thumbnail"
            class="thumbnail align-self-center shadow rounded"
            :key="key"
            v-if="visible"
            @error.prevent="setVisibility"
          >
          <img
            height="70px"
            width="70px"
            ref="thumbnail"
            class="thumbnail align-self-center shadow rounded"
            src="/assets/images/60a3c4c7a557bb0fdc2c0291-60ba33addac02b2f0d93d5f0-takij.peg"
          />
          </object>
        </div>
        <div class="d-flex flex-column flex-grow p-1 mt-2 w-100">
          <div class="flex-shrink mt-2">
            <div>{{ getPlaying.title }}</div>
            <div>{{ getPlaying.artistName }}</div>
          </div>
          <div class="p-2">
            <audio
              controls
              ref="player"
              class="align-self-center shadow rounded bg-dark flex-grow w-100"
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
import { mapGetters } from "vuex";
import emitter from "@/shared/bus";

export default {
  name: "MusicPlayer",
  data() {
    return {
      visible: true,
      playing: false,
      muted: false,
      key: 1,
      imageUrl: "/assets/images",
      audioUrl: "/streams/audio",
    };
  },
  computed: {
    ...mapGetters("audio", ["getPlaying"]),
  },
  mounted() {
    let thumbnail = this.$refs.thumbnail;
    let forceRender = this.forceRender;
    let player  = this.$refs.player;
    emitter.on("stateChange", function () {
      forceRender(thumbnail);
      player.load();
      player.play();
    });
  },
  methods: {
    setVisibility() {
      this.visible = false;
    },
    forceRender(thumbnail){
        alert("Render")
        thumbnail.key += 1;
    }
    // playAudio() {
    //   if (!this.playing) {
    //     this.playing = true;
    //     console.log(this.$refs.player);
    //     this.$refs.player.play();
    //   } else {
    //     this.playing = false;
    //     this.$refs.player.pause();
    //   }
    // },
    // mute() {
    //   if (!this.muted) {
    //     this.muted = true;
    //     this.$refs.player.muted = true;
    //   } else {
    //     this.muted = false;
    //     this.$refs.player.muted = false;
    //   }
    // },
    // stop() {
    //   this.playing = false;
    //   this.$refs.player.pause();
    //   this.$refs.player.currentTime = 0;
    // },
  },
};
</script>

<style scoped>
audio::-webkit-media-controls-play-button,
audio::-webkit-media-controls-panel {
  background-color: #2f2f2f;
  color: #fff;
}
</style>
