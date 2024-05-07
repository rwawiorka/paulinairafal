<template>
    <div class="w-full h-full bg-center bg-no-repeat bg-cover jarallax">
        <img class="jarallax-img" :src="imgSrc" alt="Hero image" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';


const imgSrc = '/hands.png';
const imageLoaded = ref(false);

onMounted(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        imageLoaded.value = true;
        onImageLoaded();
    };
    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.0,
    });
});

const onImageLoaded = () => {
    emit('image-loaded');
};

const emit = defineEmits(['image-loaded']);
</script>