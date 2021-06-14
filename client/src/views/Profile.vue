<template>
  <div class="profile component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">PROFILE</h1>
      <div class="row">
        <div class="col-md-6 align-middle p-2 d-flex align-items-center">
          <img
            alt="Profile"
            class="rounded shadow align-middle"
            v-bind:src="`/assets/images/profile/${user.profile}`"
          />
        </div>
        <div class="col-md-6 align-middle p-2 text-center">
          <h1 class="pt-5">
            {{ user.name }}
            <i
              v-if="user.verified"
              class="fas fa-check-circle text-info h3"
            ></i>
          </h1>
          <h2 class="pb-2">Email: {{ user.email }}</h2>
          <button class="btn btn-danger rounded-pill">Delete Account</button>
        </div>
      </div>
      <div class="uploads p-3">
        <h1 class="p-5 text-center">YOUR UPLOADS</h1>
        <div class="tracks">
          <div class="conatiner-fluid">
            <div class="row">
              <div class="col">
                <span
                  v-for="track in tracks"
                  v-bind:key="track._id"
                  class="p-5"
                >
                  <MusicCard v-bind:data="track" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MusicCard from "@/components/musicCard.vue";

export default {
  name: "Profile",
  data() {
    return {
      tracks: [],
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  components: {
    MusicCard
  },
  mounted() {
    this.$store
      .dispatch("uploads/fetchUploads", this.user._id)
      .then((res) => {
        if (res.length === 0) this.error = "No Uploads Found";
        this.tracks = res;
      })
      .catch((err) => {
        //Pass
      });
  },
};
</script>
