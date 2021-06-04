<template>
  <div class="row component">
    <div class="col-md-4 col-sm-12 button-fixed">
      <div class="p-3 pb-4 bg-custom box-shadow text-white">
        <div class="row">
          <div class="col-10">
            <h2>Allow Cookies</h2>
          </div>
          <div class="col-2 text-center" @click="hide">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <p>
          This Website uses Cookies in Order to Improve Your Experience.
          <router-link to="/privacypolicy">Read More</router-link>
        </p>
        <button type="button"  @click="hide" class="btn btn-danger w-100">
          Accept Cookies
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieConsent",
  methods: {
    hide(){
      this.$emit("hide");
    }
  }
};
</script>

<style scoped>
.bg-custom {
  background-color: #394047;
}
.button-fixed {
  bottom: 0;
  position: absolute;
  right: 0;
  border-radius: 4px;
}
.fas {
  cursor: pointer;
  font-size: 24px;
}
p {
  font-size: 14px;
}
</style>
