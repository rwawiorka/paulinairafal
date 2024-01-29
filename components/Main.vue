<template>
    <WeddingDay v-if="weddingDay" />
    <Hero v-else />
</template>

<script>
const { countDown } = useCountDown();
export default {
    data() {
        return {
            weddingDay: false,
        }
    },
    created() {
        const today = new Date().setHours(0, 0, 0, 0);
        const weddingDate = countDown.setHours(0, 0, 0, 0);
        this.weddingDay = today >= weddingDate;
    }
}
</script>