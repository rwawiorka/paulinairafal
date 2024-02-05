<template>
    <WeddingDay v-if="weddingDay" @image-loaded="onImageLoaded" :is-loading="isLoading" />
    <Hero v-else @image-loaded="onImageLoaded" :is-loading="isLoading" />
</template>

<script setup lang="ts">
const { countDown } = useCountDown();
const weddingDay = ref(false);
const emit = defineEmits(['image-loaded']);
const onImageLoaded = () => {
    emit('image-loaded');
};

const props = defineProps({
    isLoading: Boolean,
});

onMounted(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    const weddingDate = countDown.setHours(0, 0, 0, 0);
    weddingDay.value = today >= weddingDate;
});
</script>