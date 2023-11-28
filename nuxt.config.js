// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '/assets/styles/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    vendor: ['vue-burger-menu']
  },

  plugins: [
    { src: '~/plugins/vue-burger-menu.js', ssr: false },
  ],
  carousel: {
    prefix: 'MyPrefix'
  },
  modules: [
    'vue3-carousel-nuxt'
  ]

})