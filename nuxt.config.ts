// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Hissa',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=0',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'O`z hissangizni biz bilan birga qo`shing!',
        },
        {
          name: 'description',
          content: "O'z hissangizni biz bilan birga qo'shing!",
        },
        {
          hid: 'og:image',
          name: 'image',
          property: 'og:image',
          content: '/og.png',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '/og.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://hissa-dev.commeta.uz/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hissa',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        {
          rel: 'canonical',
          href: 'https://hissa-dev.commeta.uz/',
        },
      ],
    },
  },
  css: ['@/assets/styles/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },
  devServerHandlers: [],
  nitro: {
    serveStatic: true,
  },
  experimental: {
    payloadExtraction: false,
  },
})
