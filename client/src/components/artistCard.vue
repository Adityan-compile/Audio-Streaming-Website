<template>
  <div class="container mx-auto text-center component p-5">
    <div class="card bg-dark mx-auto shadow rounded" style="width: 15rem;">
      <object
        class="card-img-top"
        v-bind:data="`/assets/images/profile/${artist.profile}`"
        type="image/jpeg"
        loading="lazy"
        crossorigin="use-credentials"
      >
        <img src="../assets/default.png" class="card-img-top" alt="..." />
      </object>
      <div class="card-body">
            <h5 class="card-title">{{ artist.name }} <i v-if="artist.verified === true" class="fas fa-check-circle text-primary h6"></i> </h5>
            <h5 class="card-title">{{ artist.email }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-img-top{
  object-fit: cover;
}
</style>
