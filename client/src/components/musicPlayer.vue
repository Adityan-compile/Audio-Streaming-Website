<template>
    <div class="music-player component box-shadow sticky-bottom">
        <div class="card-footer fixed-bottom bg-dark">
            <div class="row">
                <div class="col-1 p-2">
                    <div class="align-middle">
                        <object
                            data="http://127.0.0.1:8080/assets/images/60897472c5d212398d8386c5-magentaj.peg"
                            type="image/jpeg"
                            height="50px"
                            width="50px"
                            class="thumbnail"
                            v-if="visible"
                            @error.prevent="setVisibility"
                        >
                        </object>
                    </div>
                </div>
                <div class="col-2 p-2">
                    Magenta Riddim
                    <br />
                    Dj Snake
                </div>
                <div
                    class="col-2 p-2 align-middle align-self-center text-center"
                >
                    <i
                        v-bind:class="{
                            'fa fa-play p-2': !playing,
                            'fa fa-pause p-2': playing,
                        }"
                        role="button"
                        @click.prevent="playAudio"
                    ></i>
                </div>
                <div class="col-2 p-2 align-self-center text-center">
                    <audio ref="player">
                        <source
                            src="http://127.0.0.1:3000/streams/audio/60897472c5d212398d8386c5-y2matecom-DJSnakeMagentaRiddim.mp3"
                            type="audio/mp3"
                        />
                    </audio>

                    <div class="progress">
                        <div
                            class="progress-bar"
                            role="progressbar"
                            style="width: 25%"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
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
        };
    },
    methods: {
        setVisibility() {
            this.visible = false;
        },
        playAudio() {
            if (!this.playing) {
                this.playing = true;
                this.$refs.player.play();
            } else {
                this.playing = false;
                this.$refs.player.pause();
            }
        },
    },
};
</script>

<style scoped>
.player {
    background-color: #212529;
}
</style>
