<template>
  <div id="menueats"
       :style="{ backgroundImage: `url(${imgSrc})` }"
       class="md:p-16 p-6 flex flex-col relative justify-center items-center "
  >
    <h3 class="text-4xl md:text-6xl font-cloud primary-color wedding-text-shadow mb-12 text-center">Menu weselne</h3>
    <div class="flex flex-col md:gap-16">
      <MenuCard name="Zupy" :dish="soups"/>
      <MenuCard name="Danie główne" :dish="mainCourses"/>
      <MenuCard name="Drugie danie" :dish="secondCourses"/>
      <MenuCard name="Tort" :dish="tort"/>
      <MenuCard name="Trzecie danie" :dish="thirdCourses"/>
      <MenuCard name="Czwarte danie" :dish="fourthCourses"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgSrc = '/timeline-bg.jpg';

const soups = [
    'Krem z białych warzyw'
]

const mainCourses = [
    'Kotlet schabowy drobiowy',
    'Żeberka w marynacie słodko pikantnej',
    'Kaczka w glazurze',
    'Ziemniak specjalny | szpinak | ser feta',
    'Ziemniaki z wody',
    'Zestaw surówek 2 gatunki',
]

const secondCourses = [
    'Karkówka z pieca z sosem pieczarkowym',
    'Rolada drobiowa w szynce parmeńskiej | sos pomidorowy',
    'Kluski śląskie',
]

const tort = [
    'Tort weselny',
]

const thirdCourses = [
    'De\'volay z serem',
    'Babka ziemniaczana z sosem grzybowym',
    'Sałata ze śmietaną',
]

const fourthCourses = [
    'Boeuf Strogonow',
]

const appetizers = [
    'Tatar ze śledzia',
    'Tatar wołowy',
    'Półmisek galaret - 2 gatunki mięs',
    'Patę z gęsich wątróbek w słoiku',
    'Tarta wytrawna w pory w winie',
    'Mini burgery wołowe',
    'Sałatka brokułowa',
    'Sałatka smoked',
]

</script>

<style>

</style>