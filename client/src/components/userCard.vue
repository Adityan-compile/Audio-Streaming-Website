<template>
  <div class="container mx-auto text-center box-shadow">
    <div class="card bg-dark mx-auto" style="width: 15rem">
      <img src="../assets/default.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Name: {{ user.name }}</h5>
        <h5 class="card-title">Email: {{ user.email }}</h5>
        <a href="#" class="btn btn-danger">Delete Account</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
