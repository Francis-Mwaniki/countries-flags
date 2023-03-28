// https://nuxt.com/docs/api/configuration/nuxt-config'
export default defineNuxtConfig({
   modules: ['nuxt-icon','@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
   components: { global: true, dirs: ['~/components'] },
   css: ['~/assets/css/main.css', '~/assets/css/root.css'],
})
