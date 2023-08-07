// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.svg",
                },
            ],
            title: 'Hissa',
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
            baseURL: "localhost",
        },
    },
    devServerHandlers: [],
    nitro: {
        serveStatic: true,
    },
    experimental: {
        payloadExtraction: false
    }
})
