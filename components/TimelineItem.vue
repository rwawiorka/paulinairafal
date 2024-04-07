<template>
  <div
    class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active gap-5"
    :class="{ 'flex': !isMobile && reverse, 'justify-end': !isMobile && reverse }">
    <!-- Icon -->
    <div
      class="flex items-center justify-center w-5 h-5 rounded-full border border-wedding-400 bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    </div>
    <!-- Card -->
    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
      <svg v-if="isSvg" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#fd6b9a" class="bi bi-signpost-split"
        viewBox="0 0 16 16">
        <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"></path>
      </svg>
      <i v-else class="icon-timeline text-6xl" :class="[icon, { 'flex': !isMobile && reverse, 'justify-end': !isMobile && reverse }]"></i>
      <div class="font-bold text-slate-900 text-2xl" :class="{ 'flex': !isMobile && reverse, 'justify-end': !isMobile && reverse }">{{ title }}
      </div>
      <time v-if="time" class="font-caveat font-medium text-slate-900 text-2xl"
        :class="{ 'flex': !isMobile && reverse, 'justify-end': !isMobile && reverse }">{{ time }}</time>
      <div v-if="location" class="text-slate-500 text-xl" :class="{ 'flex': !isMobile && reverse, 'justify-end': !isMobile && reverse }">{{
      location }}</div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const updateIsMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateIsMobile);
  }
});

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  reverse: {
    type: Boolean,
    default: false
  },
  isSvg: {
    type: Boolean,
    default: false
  }
})
</script>

<style></style>