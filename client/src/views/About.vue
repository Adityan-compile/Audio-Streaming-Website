<template>
<div class="component p-5 text-center">
    <p class="text-danger p-5">{{ errorMessage }}</p>
    <About-Song v-bind:data="track" />
    <Add-To-Playlist :data="playlists" :song="id"/>
</div>
</template>

<script>
import AboutSong from '@/components/about.vue';
import AddToPlaylist from "@/components/addToPlaylist.vue";
export default {
  name: "About",
  data() {
      return {
          track: {},
          errorMessage: "",
          playlists: []
      }
  },
  components: {
      AboutSong,
      AddToPlaylist
  },
  props: {
      id: {
          type: String,
          required: true
      }
  },
  mounted(){
      this.$store.dispatch('audio/fetchTrackDetails', this.id).then((res)=>{
          if(res === null) {
              this.errorMessage = "Track Not Found !!!";
          }else{
              this.track = res;
          }
      }).catch((err)=>{
          this.errorMessage = "OOPS!! Something Went Wrong";
      });
      this.$store.dispatch('playlists/fetchPlaylists').then((res)=>{
              this.playlists = res;
      }).catch((err)=>{
          this.errorMessage = "OOPS!! Something Went Wrong";
      });
  }  
};
</script>

<style scoped>

</style>