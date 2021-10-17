<template>
  <section
    class="switch-dark-mode"
    :class="classSwitchDarkMode"
    @click="toogleDarkMode"
  >
    <div class="switch-dark-mode__icon">
      <MoonSvg v-if="this.$colorMode.preference === 'dark'" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        v-if="this.$colorMode.preference === 'light'"
      >
        <path
          d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
import MoonSvg from '~/assets/icons/moon.svg?inline'

export default {
  components: { MoonSvg },

  computed: {
    classSwitchDarkMode () {
      return {
        'switch-dark-mode--active': this.$colorMode.preference === 'dark'
      }
    }
  },

  methods: {
    toogleDarkMode () {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style lang="scss">
.dark-mode .switch-dark-mode {
  --icon-fill: #{$text-color-dark};
}

.switch-dark-mode {
  --icon-fill: #{$text-color};

  z-index: 0;
  margin-right: 1.5em;
  cursor: pointer;

  &__icon {
    fill: var(--icon-fill);
    width: 24px;
    height: 24px;
  }
}
</style>
