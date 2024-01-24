<template>
    <UButton
        class="photo-button rounded-3xl flex gap-4 justify-center items-center top-2/4 left-2/4 absolute -translate-x-2/4 text-2xl pt-4 pb-4 pl-8 pr-8 font-normal transition-all ease-in-out delay-300 hover:bg-white"
        @mouseover="isHovered = true" @mouseleave="isHovered = false">
        Zrób zdjęcie
        <CameraWithFlash v-if="isHovered" class="photo-icon" />
        <Camera v-else class="photo-icon" />
    </UButton>
</template>

<script setup>
import Camera from '~icons/fluent-emoji-flat/camera';
import CameraWithFlash from '~icons/fluent-emoji-flat/camera-with-flash';
import { ref } from 'vue';

const isHovered = ref(false);

</script>

<style scoped lang="scss">
.photo {
    &-button {
        background-color: #CFB0EF;
        color: #FFF;
        font-family: 'Pacifico', sanf-serif;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(139, 39, 242, 1);

        &:hover {
            color: #CFB0EF;
            background-color: #FFF;
        }
    }
}
</style>