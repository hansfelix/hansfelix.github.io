import enLocale from "./static/locales/en.json";
import esLocale from "./static/locales/es.json";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior: async (to, from, savedPosition) => {
      console.log(to, from, savedPosition)
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hans Felix | Software Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "I am an experienced software developer based in Peru, specializing in building exceptional websites." },
      { hid: "og:title", name: "og:title", content: "Hans Felix | Software Developer" },
      { hid: "og:url", name: "og:url", content: "https://hansfelix.github.io/" },
      { hid: "og:description", name: "og:description", content: "I am an experienced software developer based in Peru, specializing in building exceptional websites." },
      { hid: "og:image", name: "og:image", content: "/view.PNG" },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:locale", name: "og:locale", content: "en_US" },
      { hid: "og:locale:alternate", name: "og:locale:alternate", content: "es_ES" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css  
  css: ["normalize.css/normalize.css", "@/assets/scss/main.scss", "@/assets/scss/transitions.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins  
  plugins: ["~/plugins/global.js", "@/plugins/vClickOutside"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module/    
    '@nuxtjs/style-resources',
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-module
    "@nuxtjs/svg"
  ],

  styleResources: {
    scss: ["@/assets/scss/_colors.scss", "@/assets/scss/_mq.scss", "@/assets/scss/_mixins.scss"]
  },

  googleFonts: {
    display: 'swap',
    families: {
      'DM+Sans': [400, 500],
      'Inconsolata': [400]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ["en", "es"],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: enLocale,
        es: esLocale
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
