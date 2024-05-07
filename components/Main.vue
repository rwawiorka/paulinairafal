<template>
    <Hero @image-loaded="onImageLoaded" :is-loading="isLoading" />
</template>

<script setup lang="ts">
const emit = defineEmits(['image-loaded']);
const onImageLoaded = () => {
    emit('image-loaded');
};

const props = defineProps({
    isLoading: Boolean,
});
</script>
<style>
</style>