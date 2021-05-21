<template>
  <div class="upload-form component p-5">
    <form
      class="row g-3"
      id="uploadForm"
      @submit.prevent="upload"
      name="uploadForm"
    >
      <div class="col-md-6">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control text-input"
          placeholder="Never Gonna Give You Up"
          v-model="title"
          id="title"
          name="title"
        />
      </div>
      <div class="col-md-6">
        <label for="artist" class="form-label">Artist</label>
        <input
          type="text"
          class="form-control text-input"
          placeholder="Rick Astley"
          id="artist"
          v-model="artist"
          name="artist"
        />
      </div>
      <div class="col-lg-4">
        <label for="year" class="form-label">Release Year</label>
        <input
          type="year"
          class="form-control text-input"
          v-model="year"
          id="year"
          name="year"
        />
      </div>
      <div class="col-lg-4">
        <label for="thumbnail" class="form-label">Thumbnail Image</label>
        <input
          class="form-control file-input"
          type="file"
          id="thumbnail"
          ref="thumbnail"
          name="thumbnail"
        />
        <p class="text-muted">jpeg, png</p>
      </div>
      <div class="col-lg-4">
        <label for="audio" class="form-label">Audio File</label>
        <input
          class="form-control file-input"
          type="file"
          id="audio"
          ref="audio"
          name="audio"
        />
        <p class="text-muted">mp3, m4a</p>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-info">Start Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UploadForm',
  data() {
    return {
      title: '',
      artist: '',
      year: new Date().getFullYear() || '',
      //  files: null,
    };
  },
  methods: {
    // setFiles(){
    //   console.log(this.$refs.thumbnail.files[0])
    // },
    upload() {
      let formData = new FormData();
      formData.append('title', this.title);
      formData.append('artist', this.artist);
      formData.append('year', this.year);
      formData.append('thumbnail', this.$refs.thumbnail.files[0]);
      formData.append('audio', this.$refs.audio.files[0]);
      this.$emit("upload", true);
      this.$store.dispatch('uploads/uploadTrack').then(res =>{
        this.$emit("upload", false);
        this.$emit("success", "success");
      }).catch(err =>{
        this.$emit("upload", false);
        this.$emit("error", "error");
      });
    },
  },
};
</script>

<style scoped>
:root {
  --white: #fff;
}

.text-input {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: var(--white);
}
.file-input {
  background: none;
  color: var(--white);
}
</style>
