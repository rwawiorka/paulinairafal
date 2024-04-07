<template>
  <header class="absolute w-full z-10 p-6 pt-6 pb-6 border-b border-opacity-20 border-wedding-50-50" id="main">
    <div class="container m-auto flex justify-between items-center font-cloud">
      <h3 class="title inline font text-2xl"><a href="/">Paulina &amp; Rafał</a></h3>
      <MenuMobile v-if="isMobile"  />
      <Menu v-else />
      
    </div>
  </header>
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
    updateIsMobile(); // Call this function to set the initial value of isMobile
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateIsMobile);
  }
});
</script>

<style></style>