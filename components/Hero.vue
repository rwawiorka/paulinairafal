<template>
    <div class="hero"
        :class="{ 'opacity-0': isLoading, 'hidden': isLoading, 'opacity-100': !isLoading, 'visible': !isLoading }">
        <HeroImage @image-loaded="onImageLoaded" />
        <HeroContent />
        <Timer />
        <Button text="Jak dojechać?" hash="#maps" />
    </div>
    <Maps :is-loading="isLoading" />
</template>

<script setup>
const emit = defineEmits(['image-loaded']);
const props = defineProps({
    isLoading: Boolean,
});

const onImageLoaded = () => {
    emit('image-loaded');
};
</script>