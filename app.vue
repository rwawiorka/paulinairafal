<template>
  <transition name="fade">
    <Loader v-if="isLoading" />
  </transition>
  <transition name="fade">
    <Main @image-loaded="onImageLoaded" :is-loading="isLoading" />
  </transition>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true);
const onImageLoaded = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

useHead({
  title: '14.09.2024 | Paulina i Rafał',
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

::selection {
  background-color: rgb(175, 149, 201) !important;
}
</style>