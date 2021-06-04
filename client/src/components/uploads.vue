<template>
  <div class="uploads" id="uploads">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">YOUR UPLOADS</h1>
      <!--<MusicCard />-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Uploads',
  components: {
  },
  methods: {
    loadUploads() {},
  },
  mounted() {
    this.loadUploads();
  },
};
</script>
