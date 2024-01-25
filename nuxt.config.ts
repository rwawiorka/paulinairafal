// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@formkit/auto-animate",
    "@nuxt/image",
    "unplugin-icons/nuxt",
    // "@nuxt/ui",
    ["@nuxtjs/google-fonts", {
      families: {
        'Alegreya': true,
      }
    }]
  ],
  image: {
    format: ['webp']
  },
  css: [
    '~/assets/css/main.css'
  ],
})