// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_except_default",
        defaultLocale: "en",
        locales: [
          {
            code: 'es',
            file: 'es-ES.js'
          },
          {
            code: 'en',
            file: 'en-US.js'
          }, // Make sure that default locale is the last one!
        ],
        langDir: 'lang/',
      },
    ],
  ]
});
