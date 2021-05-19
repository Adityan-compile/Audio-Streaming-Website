<template>
  <div class="browse component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">BROWSE</h1>
      <p class="text-danger text-center">{{ errorMessage }}</p>
      <div class="Tracks p-3">
        <div>
          <span v-for="track in tracks" v-bind:key="track._id">
            <MusicCard v-bind:data="track"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicCard from "@/components/musicCard.vue";

export default {
  name: 'Browse',
  components: {
    MusicCard
  },
  data() {
    return {
      tracks: [],
      errorMessage: '',
    };
  },
  created() {
    this.$store.dispatch('utils/fetchTracks', {sort:true}).then((tracks)=>{
      if(tracks.length === 0){
        this.errorMessage = "Whoops! No Tracks";
      }else{
        this.tracks = tracks;
      }
    }).catch((err)=>{
      this.errorMessage = "Oh,No We Encountered an Error";
    });
  },
};
</script>
