<template>
  <div class="profile component">
    <div class="container p-5">
      <h1 class="text-center pt-5 p-3">PROFILE</h1>
      <p class="text-danger p-3">{{ error }}</p>
      <div class="row">
        <div
          class="col-md-6 align-middle p-2 d-flex align-items-center justify-content-center"
        >
          <img
            alt="Profile"
            class="rounded shadow"
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
          <span class="p-2"
            ><button
              class="btn btn-danger rounded-pill text-white p-2"
              @click.prevent="deleteAccount"
            >
              Delete Account
            </button></span
          >
          <span class="p-2"
            ><router-link
              to="/user/profile/edit"
              class="btn btn-warning rounded-pill text-danger p-2"
              >Edit Account</router-link
            ></span
          >
        </div>
      </div>
      <div class="uploads p-3">
        <h1 class="p-5 text-center">YOUR UPLOADS</h1>
        <div class="tracks">
          <Track-Table :tracks="tracks" />

          <!-- <div class="conatiner-fluid">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MusicCard from "@/components/musicCard.vue";
import TrackTable from "@/components/trackTable.vue";
import emitter from "@/shared/bus.js";

export default {
  name: "Profile",
  data() {
    return {
      tracks: [],
      error: "",
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  components: {
    // MusicCard,
    TrackTable
  },
  methods: {
    deleteAccount() {
      let id = this.user._id;
      this.$store
        .dispatch("user/deleteAccount", id)
        .then((status) => {
          this.$store.commit("auth/clearState");
          this.$router.go("/");
        })
        .catch((err) => {
          this.error = "Failed to Delete Account";
        });
    },
    fetchUploads() {
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
  },
  mounted() {
    this.fetchUploads();
    emitter.on("songDelete", (res) => {
      this.error = "";
      this.fetchUploads();
    });
    emitter.on("songDeleteFailed", (res) => {
      this.error = res;
    });
  },
};
</script>
