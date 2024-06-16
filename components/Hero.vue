<template>
    <Header/>
    <div class="hero h-screen"
        :class="{ 'opacity-0': isLoading, 'hidden': isLoading, 'opacity-100': !isLoading, 'visible': !isLoading }">
        <HeroImage @image-loaded="onImageLoaded" />
        <HeroContent />
        <Timer />
    </div>
    <Maps :is-loading="isLoading" />
    <Welcome />
    <Timeline />
    <MenuEats />
    <Service />
    <Contact />
    <Footer />
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