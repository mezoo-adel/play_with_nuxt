// https://nuxt.com/docs/api/configuration/nuxt-config
//  pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias : {
     assets:"/<rootDir>/assets",
  },
  modules:[
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
  css:[
    '@/assets/main.css'
  ],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales:[
      { code: 'en', iso: 'en-US', name : "English", dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', name : "العربية", dir: 'rtl'  },
    ],
        },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
