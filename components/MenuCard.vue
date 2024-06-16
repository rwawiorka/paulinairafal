<script lang="ts" setup>

defineProps({
  name: {
    type: String,
    required: true,
  },
  dish: {
    type: Array,
    required: false,
  }
})

</script>

<template>

  <div class="menu-card md:mb-3 mb-12">
    <h2 class="md:text-4xl text-3xl font-bold text-wedding-600 font-cloud text-center md:mb-4">{{ name }}</h2>
    <ul class="space-y-1 list-disc list-inside">
      <li v-for="item in dish"
          class="justify-center items-center md:text-2xl text-xl text-wedding-500 text-center list-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>