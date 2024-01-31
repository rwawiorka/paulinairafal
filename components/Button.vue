<template>
  <div>
    <NuxtLink :to="{ path: '/', hash: props.hash }">
      <UButton
        class="wedding-300 absolute top-[calc(83%)] left-1/2 -translate-x-1/2 text-slate-200 p-5 font-alegreya font-bold text-xl wedding-box-shadow">
        {{ props.text }}
      </UButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: '',
  }
});
</script>