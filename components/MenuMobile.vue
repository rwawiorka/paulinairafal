<template>
  <input type="checkbox" id="menuInput" class="hidden" v-model="isOpen">
  <label id="burger" for="menuInput" class="absolute cursor-pointer w-8 h-8 right-8 top-5 flex justify-between flex-col">
    <div class="h-0.5 bg-white"></div>
    <div class="h-0.5 bg-white"></div>
    <div class="h-0.5 bg-white"></div>
  </label>
  <nav id="menu" class="bg-gradient-to-b from-wedding-100 to-wedding-400 h-screen fixed right-0 top-0 z-0 w-screen">
    <ul class="main-menu visible-on-click flex justify-start items-center gap-16 pt-16 flex-col w-full h-full text-lg font-alegreya" id="main-menu">
    <li class="main-menu-item">
      <router-link to="#main" class="text-3xl font-cloud text-slate-800" @click.native="isOpen = false">Strona główna</router-link>
    </li>
    <li class="main-menu-item">
      <router-link to="#maps" class="text-3xl font-cloud text-slate-800" @click.native="isOpen = false">Lokalizacja</router-link>
    </li>
    <li class="main-menu-item">
      <router-link to="#timeline" class="text-3xl font-cloud text-slate-800" @click.native="isOpen = false">Plan</router-link>
    </li>
    <li class="main-menu-item">
      <router-link to="#service" class="text-3xl font-cloud text-slate-800" @click.native="isOpen = false">Nasi usługodawcy</router-link>
    </li>
    <li class="main-menu-item">
      <router-link to="#contact" class="text-3xl font-cloud text-slate-800" @click.native="isOpen = false">Kontakt</router-link>
    </li>
  </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style>
#menu {
    transition-timing-function: cubic-bezier(10,2,3,1);
    transform: translateX(100vw);
    transition: 0.5s;
}

#menuInput:checked ~ #menu {
    transform: translateX(0rem);
}

#burger > div {
    transition: 0.5s;
    z-index: 999;
}

#menuInput:checked ~ #burger > div {
  background-color: #000;
}

#menuInput:checked ~ #burger > div:nth-child(1) {
    transform: translateY(15px) rotate(45deg);
}
#menuInput:checked ~ #burger > div:nth-child(2) {
    opacity: 0;
}
#menuInput:checked ~ #burger > div:nth-child(3) {
    transform: translateY(-15px) rotate(-45deg);
}
</style>