<template>
  <div class="player component">
    <div class="greeting p-5">
      <h1 class="pt-5">Good {{ time }} ,</h1>
    </div>
    <div class="artists ps-2">
      <h1 class="ps-5">Artists</h1>
      <p class="text-danger p-3">{{ artistError }}</p>
      <div class="row">
        <div class="col-md-6" v-for="artist in artists" v-bind:key="artist._id">
          <ArtistCard v-bind:artist="artist" />
        </div>
      </div>
    </div>
    <div class="tracks">
      <h1 class="ps-5">Tracks</h1>
      <p class="text-warning p-3">{{ trackError }}</p>
      <div class="p-5">
        <span v-for="track in tracks" v-bind:key="track._id" class="p-5">
          <MusicCard v-bind:data="track" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistCard from '@/components/artistCard.vue';
import MusicCard from '@/components/musicCard.vue';

export default {
  name: 'Player',
  data() {
    return {
      time: '',
      artists: [],
      tracks: [],
      artistError: '',
      trackError: '',
    };
  },
  mounted() {
  var hour = new Date().getHours();
  if (hour < 12) {
    this.time = 'Morning';
  } else if (hour < 18) {
    this.time = 'Afternoon';
  } else {
    this.time = 'Evening';
  }


    this.$store
      .dispatch('utils/fetchArtists')
      .then((artists) => {
        if (artists.length === 0) {
          this.trackError = "Oops We Can't Find any Artists !!!";
        }
        this.artists = artists;
      })
      .catch((err) => {
        this.artistError =
          "We can't fetch Artists at this time hang in there !!";
        console.error(err);
      });

    this.$store
      .dispatch('utils/fetchTracks')
      .then((tracks) => {
        if (tracks.length === 0) {
          this.trackError = "Oops We Can't Find any Tracks !!!";
        }
        this.tracks = tracks;
      })
      .catch((err) => {
        this.trackError = "We can't fetch Tracks at this time hang in there !!";
        console.error(err);
      });
  },
  components: {
    ArtistCard,
    MusicCard,
  },
};
</script>
