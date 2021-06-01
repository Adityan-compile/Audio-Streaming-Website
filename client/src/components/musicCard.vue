<template>
  <div class="card shadow bg-dark text-center d-flex">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <object
            :data="staticUrl + '/' + data.image"
            type="image/jpeg"
            height="100px"
            width="100px"
            class="thumbnail"
          >
            <img src="../assets/default.png" class="thumbnail" />
          </object>
        </div>
        <div class="col-md-3 p-3">
          <span class="align-middle card-text">{{ data.title }}</span>
        </div>
        <div class="col-md-2 p-3">
          <span class="align-middle card-text">{{ data.artistName }}</span>
        </div>
        <div class="col-md-2 p-3">
          <span class="align-middle card-text">{{ data.yearCreated }}</span>
        </div>
        <div class="col-md-2 p-3">
          <i class="fa fa-play-circle play align-middle"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicCard",
  data() {
    return {
      staticUrl: process.env.VUE_APP_IMAGES_URL,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.thubmnail {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
.play {
  font-size: 4rem;
}
</style>
