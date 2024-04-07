<template>
  <div id="contact" class="p-16 flex justify-center items-center flex-col" :style="{ backgroundImage: `url(${imgSrc})` }">
    <h2 class="md:text-6xl text-4xl font-cloud text-wedding-800 wedding-text-shadow mb-12 text-center">Potwierdź przybycie!</h2>
    <div class="flex justify-center items-center text-wedding-800 flex-col md:flex-row md:gap-24 gap-8">
      <div class="flex justify-center items-center flex-col gap-4">
        <h3 class="font-cloud text-4xl md:text-6xl">Paulina</h3>
        <a href="tel:+48516724984" class="md:text-4xl text-2xl">516 724 984</a>
      </div>
      <div class="flex justify-center items-center flex-col gap-4">
        <h3 class="font-cloud text-4xl md:text-6xl" >Rafał</h3>
        <a href="tel:+48721816809" class="md:text-4xl text-2xl whitespace-nowrap">721 816 809</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgSrc = '/timeline-bg.jpg';
</script>

<style>

</style>