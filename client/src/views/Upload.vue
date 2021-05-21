<template>
  <div class="component container p-5">
    <h1 class="text-center pt-5 p-3">UPLOAD NEW TRACK</h1>
    <div>
      <UploadForm />
    </div>
    <div v-if="uploading">
      <ProgressBar v-bind:progress="uploadProgress"/>
    </div>
  </div>
</template>

<script>
import UploadForm from '@/components/uploadForm.vue';
import ProgressBar from '@/components/progressBar.vue';
export default {
  name: 'Upload',
  data(){
    return {
      uploading: true,
      uploadProgress: 0,
    }
  },
  components: {
    UploadForm,
    ProgressBar
  },
};
</script>
