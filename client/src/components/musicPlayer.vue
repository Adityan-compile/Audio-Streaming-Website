<template>
  <div class="music-player component box-shadow sticky-bottom">
    <div class="card-footer fixed-bottom bg-dark">
      <div class="d-flex flex-row justify-content-center">
        <div class="p-2">
          <object
            data="http://127.0.0.1:8080/assets/images/60a3c4c7a557bb0fdc2c0291-60ba3539dac02b2f0d93d5fa-majentaj.peg"
            type="image/jpeg"
            height="70px"
            width="70px"
            class="thumbnail align-self-center shadow rounded"
            v-if="visible"
            @error.prevent="setVisibility"
          ></object>
        </div>
        <div class="p-2 align-self-center">Magenta Riddim</div>
        <div class="p-2 align-self-center">Dj Snake</div>
        <div class="p-2 mt-3">
          <audio controls ref="player" class="align-self-center shadow rounded bg-dark">
            <source
              src="http://127.0.0.1:3000/streams/audio/60a3c4c7a557bb0fdc2c0291-60ba3539dac02b2f0d93d5fa-y2matecom-DJSnakeMagentaRiddim.mp3"
              type="audio/mp3"
            />
          </audio>
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
.player {
  background-color: #212529;
}
</style>
