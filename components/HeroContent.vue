<template>
    <div class="w-full h-full absolute top-0">
        <blockquote
            class="hero-slogan text-slate-200 text-center w-1/6 text-2xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud">
            <sub class="relative">
                <FormatQuote class="absolute right-full bottom-0" />
            </sub>
            {{ heroData.slogan }}
            <sup class="relative">
                <FormatQuote class="absolute left-full top-0 rotate-180" />
            </sup>
        </blockquote>
        <h1 class="hero-title text-8xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud primary-color wedding-text-shadow"
            :class="{ 'hero-wedding-title': props.isWeddingDay }">
            {{ heroData.text }}
        </h1>
        <h2 class="hero-date text-slate-200 text-5xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-alegreya"
            :class="{ 'hero-wedding-date': props.isWeddingDay }">
            {{ heroData.date }}
        </h2>
        <h3 v-if="props.isWeddingDay"
            class="hero-upload text-slate-200 text-3xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase w-1/4 text-center font-alegreya"
            :class="{ 'hero-wedding-upload': props.isWeddingDay }">
            {{ heroData.upload }}
        </h3>
        <PhotoButton v-if="props.isWeddingDay" />
    </div>
</template>

<script setup>
import FormatQuote from '~icons/material-symbols/format-quote';

import { ref } from 'vue';

const heroData = ref({
    text: "Paulina i Rafał",
    slogan: "Miłość sama w sobie jest nie do pojęcia, ale dzięki miłości możemy pojąć wszystko.",
    date: new Date(2024, 8, 14).toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }),
    upload: "Podziel się z nami swoimi zdjęciami z naszego ślubu!"
});

const props = defineProps({
    isWeddingDay: {
        type: Boolean,
        default: false,
    },
});

</script>

<style scoped lang="scss">
.hero {
    &-slogan {
        top: 10%;
    }

    &-date {
        top: 60%;
    }

    &-upload {
        top: 80%;
    }

    &-wedding {
        &-title {
            top: 30%;
        }

        &-date {
            top: 40%;
        }

        &-upload {
            top: 70%;
        }
    }
}
</style>