<template>
  <div class="w-full h-full absolute top-0">
    <h1 class="hero-title absolute top-[calc(40%)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud primary-color wedding-text-shadow text-center text-8xl">
      {{ heroData.text }}
    </h1>
    <h2 class="hero-date text-slate-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-cloud text-6xl top-[calc(55%)]">
      {{ heroData.date }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const {countDown} = useCountDown();
import {ref} from 'vue';

const heroData = ref({
  text: "Paulina & Rafał",
  date: countDown.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }),
});
</script>