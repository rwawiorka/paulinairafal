<template>
    <WeddingDay v-if="weddingDay" />
    <Hero v-else />
</template>

<script setup lang="ts">
const { countDown } = useCountDown();

const weddingDay = ref(false);

onMounted(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    const weddingDate = countDown.setHours(0, 0, 0, 0);
    weddingDay.value = today >= weddingDate;
});
</script>