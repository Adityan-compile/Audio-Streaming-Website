<template>
    <div class="component">
        <div class="container p-5">
                <h1 class="text-center pt-5 p-3">EDIT PROFILE</h1>
                <div class="container">
                    <Edit-Profile-Form />
                </div>
        </div>
    </div>
</template>

<script>

import EditProfileForm from "@/components/editProfileForm.vue";

export default {
    name: "EditProfile",
    components: {
        EditProfileForm
    }
};
</script>