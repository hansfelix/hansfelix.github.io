let development = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "spa",
  generate: {
    dir: "docs"
  },
  router: {
    base: development ? "/" : "/personal-page/"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Hans Felix",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "@/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vClickOutside"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    // Doc: https://nuxt-community.github.io/nuxt-i18n/setup.html
    "nuxt-i18n",
    // Doc: https://github.com/nuxt-community/svg-module
    "@nuxtjs/svg"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Sass vairables
   */
  styleResources: {
    scss: ["@/assets/scss/_colors.scss", "@/assets/scss/_mq.scss", "@/assets/scss/_mixins.scss"]
  },

  i18n: {
    locales: ["en", "es"],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./static/locales/en.json"),
        es: require("./static/locales/es.json")
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected"
    }
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
};
