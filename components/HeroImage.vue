<template>
    <NuxtImg class="hero-image h-screen w-screen brightness-75 object-cover" layout="fill" format="" fit="cover"
        src="/hands.jpg" @load="onImageLoaded" />
</template>

<script setup>
const onImageLoaded = () => {
    emit('image-loaded');
}

const emit = defineEmits(['image-loaded']);
</script>