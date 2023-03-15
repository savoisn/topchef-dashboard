// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/plausible'],

    ssr: false,
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/topchef-dashboard/favicon.png' }
            ],
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
