module.exports = {
  mode: "spa",
  // srcDir: 'src',
  generate: {
    dir: "dist"
  },
  router: {
    base: "/"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Hans Felix | Software Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "I am an experienced software developer based in Peru, specializing in building exceptional websites." },
      { hid: "og:title", name: "og:title", content: "Hans Felix | Software Developer" },
      { hid: "og:url", name: "og:url", content: "https://hansfelix.github.io/" },
      { hid: "og:description", name: "og:description", content: "I am an experienced software developer based in Peru, specializing in building exceptional websites." }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "@/assets/scss/main.scss", "@/assets/scss/transitions.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/global.js", "@/plugins/vClickOutside"],
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
    "@nuxtjs/svg",
    // Doc: https://github.com/rigor789/vue-scrollto
    "vue-scrollto/nuxt"
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
