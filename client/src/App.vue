<template>
  <div>
    <Navbar></Navbar>
    <router-view />
    <MusicPlayer v-if="isLoggedIn" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import MusicPlayer from "@/components/musicPlayer";
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    MusicPlayer
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  }
};
</script>
