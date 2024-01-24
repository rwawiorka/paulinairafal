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
        'Dancing Script': {
          wght: [400, 700],
          ital: [400],
        },
        'Lobster': {
          wght: [400]
        },
        Roboto: true,
        Pacifico: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        },
        DancingScript: true,
      }
    }]
  ],
  image: {
    format: ['webp']
  },
})