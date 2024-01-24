<template>
    <div class="hero-text w-full h-full">
        <blockquote class="hero-slogan text-slate-200 text-center w-1/6 text-2xl">
            <sub>
                <FormatQuote class="hero-slogan-quote-start" />
            </sub>
            {{ heroData.slogan }}
            <sup>
                <FormatQuote class="hero-slogan-quote-end" />
            </sup>
        </blockquote>
        <h1 class="hero-title text-8xl font-bold outline-4 stroke-cyan-400"
            :class="{ 'hero-wedding-title': props.isWeddingDay }">{{ heroData.text }}</h1>
        <h2 class="hero-date text-slate-200 text-5xl" :class="{ 'hero-wedding-date': props.isWeddingDay }">{{ heroData.date
        }}</h2>
        <h3 v-if="props.isWeddingDay" class="hero-upload text-slate-200 text-4xl"
            :class="{ 'hero-wedding-upload': props.isWeddingDay }">{{ heroData.upload }}</h3>
        <PhotoButton v-if="props.isWeddingDay" />
    </div>
</template>

<script setup>
import FormatQuote from '~icons/material-symbols/format-quote';

import { ref, getCurrentInstance } from 'vue';

const heroData = ref({
    text: "Paulina & Rafał",
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
    &-image {
        object-fit: cover;
    }

    &-text {
        position: absolute;
        top: 0;
    }

    &-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Dancing Script', cursive;
        color: #CFB0EF;
        text-shadow: 0px 0px 10px rgba(139, 39, 242, 1);
    }

    &-slogan {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;

        &-quote {
            &-start {
                position: absolute;
                right: 100%;
                bottom: 0;
            }

            &-end {
                transform: rotate(180deg);
                position: absolute;
                left: 100%;
                top: 0;
            }
        }
    }

    &-date {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;
    }

    &-upload {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Lobster', cursive;
    }

    &-wedding {
        &-title {
            top: 30%;
        }

        &-date {
            top: 40%;
        }

        &-upload {
            top: 60%;
        }
    }

    sub,
    sup {
        position: relative;
    }
}
</style>