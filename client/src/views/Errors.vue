<template>
    <div class="errors component text-center text-white">
        <Error />
    </div>
</template>
<script>
import Error from "@/components/errors/404.vue";

export default {
    name: "Errors",
    components: {
        Error,
    },
};
</script>
