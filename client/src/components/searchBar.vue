<template>
  <div class="searchbar p-4">
    <form>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search for Your Favourite Music"
          aria-label="Search"
          aria-describedby="basic-addon2"
          v-model="query"
        />
        <button
          class="btn btn-outline-info"
          type="submit"
          id="button-addon2"
          @click.prevent="search"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data() {
    return {
      query: '' || this.$store.state.utils.prevQuery,
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style scoped>
form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: #fff;
}
</style>
