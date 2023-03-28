// https://nuxt.com/docs/api/configuration/nuxt-config'
export default defineNuxtConfig({
   modules: ['nuxt-icon','@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
   components: { global: true, dirs: ['~/components'] },
   css: ['~/assets/css/main.css', '~/assets/css/root.css'],
   app: {
      head: {
        charset: "utf-16",
        title: "Explore continent",
        meta: [
          { name: "description", content: "Explore continent" },
          // { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ],
        script: [
          {
            src: "https://accounts.google.com/gsi/client",
            async: true,
            defer: true,
          },
        ],
        link: [
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Nunito&family=Space+Mono&display=swap",
          },
        ],
      },
      pageTransition: { name: "page", mode: "out-in" },
    },
})
