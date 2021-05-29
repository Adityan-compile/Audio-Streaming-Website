<template>
  <div class="modal" ref="CookieConsent" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>This Website Uses Cookies To Improve your Experience.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            Got It
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  mounted() {
    // this.showModal();
  },
  methods: {
    showModal() {
      this.$refs.CookieConsent.show();
    },
  },
};
</script>
