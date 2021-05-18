<template>
  <div class="container mx-auto text-center box-shadow">
    <div class="card bg-dark mx-auto" style="width: 15rem">
      <img src="../assets/default.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ artist.name }}</h5>
        <h5 class="card-title">{{ artist.email }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistCard',
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
};
</script>
