<template>
    <div class="error text-center component">
        <div class="container p-4">
            <img
                class="img-fluid pt-5 error-image"
                src="../../assets/404.png"
            />
        </div>
        <h1 class="status">404</h1>
        <h4 class="message">Not Found</h4>
        <p class="description">
            The Webpage You Were Looking for was not found.
        </p>
        <router-link class="btn btn-md btn-primary" to="/">
            Take Me Home 
            <i class="fa fa-home" aria-hidden="true"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Error",
};
</script>

<style scoped>
.error-image {
    height: 300px;
}

.status {
    font-size: 6rem;
}
.message {
    font-size: 4rem;
}
.description {
    font-size: 2rem;
}
</style>
