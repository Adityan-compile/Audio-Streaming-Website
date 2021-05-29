<template>
  <div class="progressBar component p-5">
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        v-bind:aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        v-bind:style="'width: ' + progress + '%;'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>
