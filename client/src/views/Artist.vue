<template>
  <div class="component p-5 text-center">
    <h1 class="pt-5">ARTIST</h1>
    <p class="text-danger">{{ error }}</p>
    <div class="p-5 artist">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 align-middle p-2">
            <img
              alt="Profile"
              class="rounded shadow"
              v-bind:src="`/assets/images/profile/${user.profile}`"
              crossorigin="use-credentials"
            />
          </div>
          <div class="col-md-6 align-middle p-2">
            <h1 class="p-5">{{ user.name }} <i v-if="user.verified" class="fas fa-check-circle text-info h3"></i></h1>
          </div>
        </div>
      </div>
    </div>
    <h1 class="p-5">UPLOADS</h1>
    <div class="p-5 tracks">
      <div class="conatiner-fluid">
        <div class="row">
          <div class="col">
              <span v-for="track in tracks" v-bind:key="track._id" class="p-5">
                  <MusicCard v-bind:data="track" />
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MusicCard from "@/components/musicCard.vue";

export default {
  name: "Artist",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      error: "",
      user: {},
      tracks: [],
    };
  },
  components: {
      MusicCard
  },
  mounted() {
    this.$store
      .dispatch("user/fetchUserDetails", this.id)
      .then((res) => {
        if (Object.keys(res).length === 0) {
          this.error = "No User Found !!";
        } else {
          this.user = res;
        }
      })
      .catch((err) => {
        this.error = "Error Fetching User !!";
      });

    this.$store
      .dispatch("uploads/fetchUploads", this.id)
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
