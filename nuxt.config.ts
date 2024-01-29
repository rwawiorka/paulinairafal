// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/main.scss'
  ],
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "unplugin-icons/nuxt",
    ["@nuxtjs/google-fonts", {
      families: {
        'Alegreya': true,
      }
    }]
  ],
  image: {
    format: ['webp']
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  }
})