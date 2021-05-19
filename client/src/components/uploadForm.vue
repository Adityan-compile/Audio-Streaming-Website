<template>
  <div class="upload-form component p-5">
      <form class="row g-3">
  <div class="col-md-6">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" placeholder="Never Gonna Give You Up" v-model="title" id="title">
  </div>
  <div class="col-md-6">
    <label for="artist" class="form-label">Artist</label>
    <input type="text" class="form-control" placeholder="Rick Astley" id="artist">
  </div>
  <div class="col-6">
    <label for="Year" class="form-label">Release Year</label>
    <input type="year" class="form-control" v-model="year" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Start Upload</button>
  </div>
</form>
  </div>
</template>

<script>

  export default {
    name: "UploadForm",
    data(){
      return{
         title: "",
         year: new Date().getFullYear() || "",
       }
    },
  }
</script>

<style scoped>
.form-control{
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: #fff;
}
</style>
