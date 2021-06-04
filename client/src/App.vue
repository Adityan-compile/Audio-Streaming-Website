<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <MusicPlayer v-if="isLoggedIn && getPage != 'Home'" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import MusicPlayer from "@/components/musicPlayer";
import { mapGetters } from 'vuex';

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
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapGetters('utils', ['getPage'])
  }
};
</script>
