<template>
  <div class="component">
    <img
      src="../assets/playlist.png"
      alt="Playlist"
      class="figure-img img-fluid"
      width="100"
      height="100"
      role="button"
    />
    <p class="figure-caption text-white">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
    name: "PlaylistCard",
    props: {
        title: String,
    }
};
</script>
