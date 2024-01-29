import VueGoogleMaps from '@fawmi/vue-google-maps';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    nuxtApp.vueApp.use(VueGoogleMaps, {
        load: {
            key: config.public.GOOGLE_MAPS_API_KEY,
            libraries: 'places',
        },
        installComponents: true,
    });
})

