<template>
  <div class="w-full h-96 relative bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-60" :style="{ backgroundImage: `url(${imgSrc})` }">
    <div class="backdrop-brightness-50 w-full h-full" />
    <div class="absolute text-lg w-full h-full flex flex-col justify-center items-center text-white text-center top-0 font-alegreya p-6">
      <h2 class="text-4xl md:text-6xl font-cloud primary-color wedding-text-shadow mb-6">Drodzy goście!</h2>
      <p class="text-xl md:text-2xl">Witamy na naszej ślubnej stronie internetowej!</p>
      <p class="text-xl md:text-2xl">Serdecznie zapraszamy na uroczystość zawarcia naszego związku małżeńskiego oraz zabawę weselną do samego rana.</p>
      <p class="text-xl md:text-2xl">Do zobaczenia!</p>
    </div>
  </div>
</template>

<script setup>
const imgSrc = '/wrzosy.png';
</script>