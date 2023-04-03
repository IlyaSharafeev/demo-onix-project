export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    i18n: {
        defaultLocale: 'en',
        strategy: "no_prefix",
        langDir: "locales",
        locales: [
            {
                code: 'en',
                name: 'English',
                file: "en.js"
            },
            {
                code: 'ua',
                name: 'Ukrainian',
                file: "ua.js"
            }
        ]
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
            link: [
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css'
                },
            ],
        },
    },
    imports: {
        dirs: ['./stores'],
    },
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            BASE_URL: process.env.BASE_URL,
        },
    },
    css: ["@/assets/scss/styles.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
                },
            },
        },
    },
    ssr: false,
})
