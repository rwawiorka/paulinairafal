<template>
    <UButton
        class="photo-button rounded-3xl flex gap-4 justify-center items-center left-2/4 absolute -translate-x-2/4 text-2xl pt-4 pb-4 pl-8 pr-8 font-normal transition-all ease-in-out delay-300 hover:bg-white wedding-background-primary-color text-slate-200 wedding-box-shadow hover:wedding-text-primary-color font-alegreya cursor-pointer mr-1 ml-1 w-max top-[calc(55%)]"
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
        color: var(--color-primary-50);

        &:hover {
            color: var(--wedding-primary-color);
            background-color: #FFF !important;
        }
    }
}
</style>