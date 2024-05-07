<template>
  <div id="service" class="parallax w-full relative bg-fixed bg-center bg-no-repeat bg-cover bg-opacity-60 h-[calc(50rem)] md:h-[calc(30rem)]"
    :style="{ backgroundImage: `url(${imgSrc})` }">
    <div class="backdrop-brightness-50 w-full h-full" />
    <div
      class="absolute text-lg w-full h-full flex justify-center items-center flex-col text-white text-center top-0 font-alegreya p-6">
      <h2 class="text-4xl md:text-6xl font-cloud primary-color wedding-text-shadow mb-12">Nasi usługodawcy</h2>
      <div class="flex flex-wrap md:flex-nowrap flex-col sm:flex-row justify-center items-center gap-8 md:gap-24">
        <ServiceItem name="Catering Sosenka" fb="https://www.facebook.com/ZaciszePodSosnami/"
          ig="https://www.instagram.com/zacisze.pod.sosnami/" />
        <ServiceItem name="Wojciech Kaszlej" fb="https://www.facebook.com/wojciechkaszlejfotografia/"
          ig="https://www.instagram.com/wojciech_kaszlej_fotografia/" />
        <ServiceItem name="Zespół Megas" fb="https://www.facebook.com/zespolmegas" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgSrc = '/wrzosy_stol.jpg';

</script>

<style></style>