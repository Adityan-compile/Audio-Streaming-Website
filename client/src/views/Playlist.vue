<template>
  <div class="component p-5">
    <div class="container">
      <h1 class="text-center p-3 pt-5">{{ playlist.title || "PLAYLIST" }}</h1>
      <p class="text-danger text-center">{{ error }}</p>

      <div class="tracks p-3">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  data() {
    return {
      playlist: {},
      error: "",
    };
  },
  props: {
    id: String,
  },
  mounted() {
    this.$store
      .dispatch("playlists/fetchPlaylist", this.id)
      .then((res) => {
        if (Object.keys(res).length === 0)
          return (this.error = "Playlist Not Found !!");
        this.error = "";
        this.playlist = res;
      })
      .catch((err) => {
        this.error = "Error Fetching Playlist !!";
      });
  },
};
</script>
