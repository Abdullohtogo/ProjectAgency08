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
            padding: '12px',
            screens: ['1280px']
        },
        extend: {
            colors: {
                red: '#FF0000',
                gray: {
                    100: '#F5F6F7',
                    200: '#5C6659',
                    300: '#F6F7F5',
                    400: '#808F7C',
                    500: '#CDD7C6',
                    600: '#E5ECDF',
                    700: '#939694',
                    800: '#F5F7F6',
                },
                green: {
                    light: '#D8EFDE',
                    100: '#EBF7F1',
                    200: '#A7D2B5',
                    300: '#16CC53',
                    400: '#27A44A',
                    500: '#0C3317',
                    600: '#149137',
                },
                black: {
                    100: '#090E14',
                    200: '#292E2A',
                },
                blue: {
                  light: '#E4ECF7',
                },
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
                partners: "0px 4px 30px 0px rgba(22, 204, 83, 0.20)",
                partnersCard: "0px 10px 48px 0px rgba(16, 16, 16, 0.10)",
                formCard: "0px 10px 48px 0px rgba(16, 16, 16, 0.10)",
                qrlight: "0px 4px 50px 0px rgba(39, 164, 74, 0.60)",
                header: '0px 4px 20px 0px rgba(125, 132, 141, 0.10), 0px 3px 6px 0px rgba(125, 132, 141, 0.06)',
            },
            lineHeight: {
                130: '130%',
                128: "128%",
                120: '120%',
                140: '140%',
            },
            fontSize: {
              '2xs': '10px'
            },
            backgroundColor: {
              modal: "rgba(9, 14, 20, 0.60)",
            },
        },
    },
    plugins: [],
}
