<template>
    <div class="parallax w-full h-full bg-fixed bg-center bg-no-repeat bg-cover" 
         :style="{ backgroundImage: `url(${imgSrc})` }">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imgSrc = '/hands.jpg';
const imageLoaded = ref(false);

onMounted(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        imageLoaded.value = true;
        onImageLoaded();
    };
});

const onImageLoaded = () => {
    emit('image-loaded');
};

const emit = defineEmits(['image-loaded']);
</script>