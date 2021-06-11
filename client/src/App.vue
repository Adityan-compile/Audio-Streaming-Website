<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <MusicPlayer class="p-5" v-if="loggedIn && getPage != 'Home'" />
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
