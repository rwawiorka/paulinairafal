<template>
  <div>
    <h3 class="text-2xl md:text-3xl mb-8">{{ name }}</h3>
    <div class="flex justify-center items-center gap-4">
      <a v-if="fb" :href="fb" target="_blank" rel="noopener noreferrer">
        <i class="icon-timeline text-4xl md:text-6xl icon-facebook" />
      </a>
      <a v-if="ig" :href="ig" target="_blank" rel="noopener noreferrer">
        <i class="icon-timeline text-4xl md:text-6xl icon-instagram" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  fb: {
    type: String,
    default: '',
  },
  ig: {
    type: String,
    default: '',
  },
})

</script>

<style></style>