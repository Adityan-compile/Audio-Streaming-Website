<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <div class="pt-5 mt-5">
      <MusicPlayer v-if="loggedIn && getPage != 'Home'" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import MusicPlayer from "@/components/musicPlayer";
import { mapGetters, mapState } from 'vuex';

export default {
  data(){
    return {
    }
  },
  components: {
    Navbar,
    MusicPlayer
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapGetters('utils', ['getPage'])
  }
};
</script>
