<template>
  <section class="default-layout" :class="classDarkMode">
    <toolbar />
    <nuxt />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Toolbar from "~/components/Toolbar";
export default {
  components: {
    Toolbar
  },

  computed: {
    ...mapGetters({
      isDarkMode: "settings/isDarkMode"
    }),

    classDarkMode() {
      return {
        "dark-mode": this.isDarkMode
      };
    }
  }
};
</script>

<style lang="scss">
.dark-mode.default-layout {
  --background-default-layout: #1a252e;
  --color-default-layout: #{$text-color-dark};
  --constrast-background-color-25: rgb(256, 256, 256, 0.1);
}

.default-layout {
  --background-default-layout: #f8f8f8;
  --color-default-layout: #{$text-color};

  color: var(--color-default-layout);
  background-color: var(--background-default-layout);
  transition: var(--main-transition);
  overflow: hidden;

  @include mq($until: tablet) {
  }
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
