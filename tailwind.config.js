module.exports = {
    purge: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    mode: 'jit',
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: ['1200px']
        },
        extend: {
            colors: {
                red: '#FF0000',
                gray: {
                    100: '#F5F6F7',
                    200: '#5C6659',
                    300: '#F6F7F5',
                    400: '#808F7C',
                },
                green: {
                    200: '#A7D2B5',
                    300: '#16CC53',
                    400: '#27A44A',
                    500: '#0C3317',
                },
                black: {
                    100: '#090E14'
                }
            },
            gradientColorStops: {
                'app-banner-1': '#27A44A',
                'app-banner-2': '#121C25',
            },
            borderRadius: {
                28: '28px',
                36: '36px',
                40: '40px',
            },
            boxShadow: {
                'partners': "0px 4px 30px 0px rgba(22, 204, 83, 0.20)"
            },
        },
    },
    plugins: [],
}
