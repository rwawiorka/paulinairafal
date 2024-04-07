<template>
  <footer class="w-full z-10 p-6 pt-6 pb-6 border-t border-opacity-20 border-wedding-50-50 bg-wedding-400" id="main">
    <div class="container m-auto flex items-center font-cloud" :class="{'justify-center': isMobile, 'justify-between': !isMobile}">
      <h3 class="title inline font text-2xl"><a href="/">Paulina &amp; Rafał</a></h3>
      <Menu v-if="!isMobile"/>
    </div>
  </footer>
</template>

<script lang="ts" setup>

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

</script>

<style></style>