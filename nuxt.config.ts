// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias : {
     assets:"/<rootDir>/assets",
  },
  modules:[
    '@nuxtjs/i18n',
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
