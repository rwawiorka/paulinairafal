<template>
  <div id="timeline" class="p-16" :style="{ backgroundImage: `url(${imgSrc})` }">
    <div
      class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <TimelineItem title="Ślub" time="15:30" location="Parafia Rzymskokatolicka p.w. Podwyższenia Krzyża Świętego w Bargłowie Kościelnym" icon="icon-ciurclke" />
      <TimelineItem title="Wesele" location="Sala Bankietowa Uroczysko Nowiny Bargłowskie 3" icon="icon-wine-glass" reverse="true" />
      <TimelineItem title="Poprawiny" location="Sala Bankietowa Uroczysko Nowiny Bargłowskie 3" icon="icon-wine-glass" isSvg="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const imgSrc = '/timeline-bg.jpg';
</script>

<style></style>