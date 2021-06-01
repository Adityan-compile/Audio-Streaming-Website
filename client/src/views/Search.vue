<template>
  <div class="search component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">SEARCH</h1>
      <p class="text-danger text-center">{{ errorMessage }}</p>
      <SearchBar @Search="search" />
      <div class="results">
        <span v-for="result in results" v-bind:key="result._id" class="p-5">
          <MusicCard v-bind:data="result" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MusicCard from '@/components/musicCard.vue';
import SearchBar from '@/components/searchBar.vue';
export default {
  name: 'Search',
  data() {
    return {
      results: [],
      errorMessage: '',
    };
  },
  methods: {
    search(query) {
      this.$store
        .dispatch('utils/search', query)
        .then((res) => {
          if (res.length == 0) {
            this.errorMessage = 'No Results !!!';
          } else {
            this.errorMessage = "";
            this.results = res;
          }
        })
        .catch((err) => {
          console.error(err);
          this.errorMessage = 'Search Error';
        });
    },
  },
  components: {
    SearchBar,
    MusicCard,
  },
};
</script>
