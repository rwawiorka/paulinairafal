<template>
    <WeddingDay v-if="weddingDay" />
    <Hero v-else />
</template>

<script>
export default {
    data() {
        return {
            weddingDay: false,
        }
    },
    created() {
        const today = new Date().setHours(0, 0, 0, 0);
        const weddingDate = new Date(2024, 8, 14).setHours(0, 0, 0, 0);
        this.weddingDay = today >= weddingDate;
    }
}
</script>