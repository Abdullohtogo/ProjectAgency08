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
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/smartbanner.js/1.14.6/smartbanner.min.css',
                },
            ],
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/smartbanner.js/1.14.6/smartbanner.min.js',
                },
            ],
            meta: [
                {
                    name: 'description',
                    content: "O'z hissangizni biz bilan birga qo'shing!",
                },
                {
                    name: 'smartbanner:price-suffix-apple',
                    content: ' - App Store',
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
                {
                    name: 'smartbanner:price-suffix-google',
                    content: ' - Google Play',
                },
                {
                    name: 'smartbanner:title',
                    content: 'Hissa',
                },
                {
                    name: 'smartbanner:author',
                    content: "O'z hissangizni biz bilan birga qo'shing!",
                },
                {
                    name: 'smartbanner:price',
                    content: 'Bepul',
                },
                {
                    name: 'smartbanner:price-suffix-apple',
                    content: ' - App Store',
                },
                {
                    name: 'smartbanner:price-suffix-google',
                    content: ' - Google Play',
                },
                {
                    name: 'smartbanner:icon-apple',
                    content: '/app-store1.png',
                },
                {
                    name: 'smartbanner:icon-google',
                    content: '/playmarket1.webp',
                },
                {
                    name: 'smartbanner:button',
                    content: 'Yuklab oling',
                },
                {
                    name: 'smartbanner:button-url-apple',
                    content: import.meta.env.VITE_APP_APP_STORE,
                },
                {
                    name: 'smartbanner:button-url-google',
                    content: import.meta.env.VITE_APP_PLAY_STORE
                },
                {
                    name: 'smartbanner:enabled-platforms',
                    content: 'android,ios',
                },
                {
                    name: 'smartbanner:close-label',
                    content: 'Close',
                },
                {
                    name: 'smartbanner:custom-design-modifier',
                    content: 'elzodxon.me',
                },
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
