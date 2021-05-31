<template>
  <div class="component container p-5">
    <h1 class="text-center pt-5 p-3">UPLOAD NEW TRACK</h1>
    <p class="text-danger">{{ errorMessage }}</p>
    <p class="text-success">{{ successMessage }}</p>

    <div>
      <UploadForm
        @success="uploadSuccess"
        @error="uploadError"
      />
    </div>
  </div>
</template>

<script>
import UploadForm from "@/components/uploadForm.vue";

export default {
  name: "Upload",
  data() {
    return {
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    uploadSuccess() {
      this.errorMessage = "";
      this.successMessage = "Track Uploaded Successfully";
    },
    uploadError() {
      this.successMessage = "";
      this.errorMessage = "Error Uploading Track Please Try Again";
    },
  },
  components: {
    UploadForm,
  },
};
</script>
