// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias : {
     assets:"/<rootDir>/assets",
     pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  modules:[
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  css:[
    '@/assets/main.css'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales:[
      { code: 'en', iso: 'en-US', name : "English", dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', name : "العربية", dir: 'rtl'  },
      { code: 'fr', iso: 'fr-FR', name : "Français" }
    ],
        },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
