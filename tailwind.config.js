/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    devtools: { enabled: true },
    css: ['/assets/styles/main.css'],
    theme: {
        extend: {},
        colors:{
            dark:{
                DEFAULT:"#02073E"
            },
            pink:{
                DEFAULT:"#EA3A60"
            },
            white:{
                DEFAULT:"#FFF"
            },
            gray:{
                DEFAULT:"#777171",
                100:"#e0e0e0",
                200:"#E5ECF4",
                300:'#e6e6fa',
                400:"#F7F8FB",
                500:"#343D48"

            },
            yellow:{
                DEFAULT:'#FFA740',
            },
            blue:{
                DEFAULT:'#2563FF',
                100:'rgba(129,157,236,0.78)'
            }
        },
        screens:{
            xs:'300px',
            sm:'480px',
            md:'710px',
            lg:'940px',
            xl:'1100px'
        },
    },
    plugins: [],
};