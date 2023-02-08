// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite:{
        css:{
            preprocessorOptions:{
                scss:{
                    additionalData: `
                    @import "@/node_modules/sass-mq/_mq.scss";
                    @import "@/assets/scss/main.scss";
                    `,
                }
            }
        }
    }

})
