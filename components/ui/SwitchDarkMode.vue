<template>
  <section
    class="switch-dark-mode"
    :class="classSwitchDarkMode"
    @click="toogleDarkMode"
  >
    <div class="switch-dark-mode__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        v-if="this.$colorMode.preference === 'dark'"
      >
        <path
          d="M16.01 13.98a5.989 5.989 0 01-5.99-5.99c0-2.711 1.813-4.974 4.283-5.714A10.04 10.04 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10a9.97 9.97 0 00-.278-2.302c-.738 2.469-3.002 4.282-5.712 4.282z"
        />
      </svg>
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
export default {
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
    width: 20px;
    height: 20px;
  }
}
</style>
