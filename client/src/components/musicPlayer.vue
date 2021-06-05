<template>
  <div class="music-player component box-shadow sticky-bottom">
    <div class="card-footer fixed-bottom bg-dark">
      <div class="d-flex flex-row justify-content-start align-items-center">
        <div class="p-1">
          <object
            data="http://127.0.0.1:8080/assets/images/60a3c4c7a557bb0fdc2c0291-60ba343ddac02b2f0d93d5f4-selfishj.peg"
            type="image/jpeg"
            height="70px"
            width="70px"
            class="thumbnail align-self-center shadow rounded"
            v-if="visible"
            @error.prevent="setVisibility"
          ></object>
        </div>
        <div class="d-flex flex-column flex-grow p-1 pt-2 w-100">
          <div class="flex-shrink">
        <div>Selfish Love</div>
        <div>Dj Snake & Selena Gomez</div>
          </div>
        <div class="p-2">
          <audio controls ref="player" class="align-self-center shadow rounded bg-dark flex-grow w-100">
            <source
              src="http://127.0.0.1:3000/streams/audio/60a3c4c7a557bb0fdc2c0291-60ba343ddac02b2f0d93d5f4-y2matecom-DJSnakeSelenaGomezSelfishLoveOfficialVideo.mp3"
              type="audio/mp3"
            />
            <p class="text-center">Your Browser Does not Support HTML5  Audio Playback</p>
          </audio>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlayer",
  data() {
    return {
      visible: true,
      playing: false,
      muted: false,
    };
  },
  methods: {
    setVisibility() {
      this.visible = false;
    },
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
