<template>
  <div class="browse component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">BROWSE</h1>
      <p class="text-danger text-center">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Browse',
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
      this.errorMessage = "OH,NO We Encountered an Error";
    });
  },
};
</script>
