<template>
  <div class="component container p-5">
    <h1 class="text-center pt-5 p-3">UPLOAD NEW TRACK</h1>
    <div>
      <UploadForm />
    </div>
  </div>
</template>

<script>
import UploadForm from '@/components/uploadForm.vue';
export default {
  name: 'Upload',
  components: {
    UploadForm,
  },
};
</script>
