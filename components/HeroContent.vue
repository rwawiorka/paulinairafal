<template>
    <div class="w-full h-full absolute top-0">
        <blockquote
            class="hero-slogan text-slate-200 text-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud w-[calc(100%-30px)] text-xl top-[calc(10%)]">
            <sub class="relative">
                <FormatQuote class="absolute right-full bottom-0" />
            </sub>
            {{ heroData.slogan }}
            <sup class="relative">
                <FormatQuote class="absolute left-full top-0 rotate-180" />
            </sup>
        </blockquote>

        <h1 :class="{ 'hero-wedding-title': props.isWeddingDay, 'top-[calc(30%)]': props.isWeddingDay }"
            class="hero-title font-bold absolute top-[calc(40%)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud primary-color wedding-text-shadow text-center text-6xl">
            {{ heroData.text }}
        </h1>
        <h2 :class="{ 'hero-wedding-date': props.isWeddingDay, 'top-[calc(45%)]': props.isWeddingDay, 'top-[calc(55%)]': !props.isWeddingDay }"
            class="hero-date text-slate-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-alegreya text-4xl">
            {{ heroData.date }}
        </h2>
        <h3 v-if="props.isWeddingDay"
            :class="{ 'hero-wedding-upload': props.isWeddingDay, 'top-[calc(75%)]': props.isWeddingDay }"
            class="hero-upload text-slate-100 text-xl absolute left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase w-[calc(100%-10px)] text-center font-alegreya">
            {{ heroData.upload }}
        </h3>
        <PhotoButton v-if="props.isWeddingDay" />
    </div>
</template>

<script setup>
import FormatQuote from '~icons/material-symbols/format-quote';
const { countDown } = useCountDown();

import { ref } from 'vue';

const heroData = ref({
    text: "Paulina i Rafał",
    slogan: "Miłość sama w sobie jest nie do pojęcia, ale dzięki miłości możemy pojąć wszystko.",
    date: countDown.toLocaleDateString('pl-PL', {
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