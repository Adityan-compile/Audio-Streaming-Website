<template>
  <div class="component container p-5">
    <h1 class="text-center pt-5 p-3">UPLOAD NEW TRACK</h1>
    <p class="text-danger">{{ errorMessage }}</p>
    <p class="text-success">{{ successMessage }}</p>

    <div>
      <UploadForm
        @upload="setUploadStatus"
        @success="uploadSuccess"
        @error="uploadError"
      />
    </div>
    <div v-if="uploading">
      <ProgressBar v-bind:progress="uploadProgress" />
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/progressBar.vue';
import UploadForm from '@/components/uploadForm.vue';
export default {
  name: 'Upload',
  data() {
    return {
      uploading: false,
      uploadProgress: 0,
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    setUploadStatus(status) {
      console.log('Setting Upload Status');
      this.uploading = status;
    },
    uploadSuccess() {
      this.successMessage = 'Track Uploaded Successfully';
    },
    uploadError() {
      this.successMessage = '';
      this.errorMessage = 'Error Uploading Track Please Try Again';
    },
  },
  components: {
    UploadForm,
    ProgressBar,
  },
};
</script>
