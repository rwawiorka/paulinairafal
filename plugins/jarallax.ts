import 'object-fit-images';
import { jarallax } from 'jarallax';

export default defineNuxtPlugin((nuxtApp) => {
    window.addEventListener('load', () => {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.0
        });
    })
})
