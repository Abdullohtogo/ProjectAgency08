// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.svg",
                },
            ],
            meta: [
                {
                    name: 'description',
                    content: "O'z hissangizni biz bilan birga qo'shing!",
                },
                // { name: 'keywords', content: 'учебное учреждение, oliy talim, университет, university, образование, экономический университет' },
                { hid: 'author', property: "author", content: "" },
                { hid: 'og:locale', property: "og:locale", content: "uz_UZ" },
                { hid: 'og:type', property: "og:type", content: "website" },
                { property: 'og:description', content: "O'z hissangizni biz bilan birga qo'shing!", },
                { hid: 'og:image', property: 'og:image', content: '/og.png' },
                // Twitter Cards
                { name: "twitter:card", content: "summary_large_image" },
                { name: 'twitter:description', content: "O'z hissangizni biz bilan birga qo'shing!", },
                { name: "twitter:creator", content: "@hissa" },
                { name: "twitter:site", content: "@hissa" },
                { hid: 'twitter:image', name: 'twitter:image', content: '/og.png' },
            ]
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
        'nuxt-security'
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
