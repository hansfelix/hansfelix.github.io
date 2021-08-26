<template>
  <section class="switch-dark-mode" :class="classSwitchDarkMode">
    <div class="switch-dark-mode__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M16.01 13.98a5.989 5.989 0 01-5.99-5.99c0-2.711 1.813-4.974 4.283-5.714A10.04 10.04 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10a9.97 9.97 0 00-.278-2.302c-.738 2.469-3.002 4.282-5.712 4.282z"
        />
      </svg>
    </div>
    <span class="switch-dark-mode__text">{{ $t('ui.darkMode') }}</span>
    <div class="switch-dark-mode__control" @click="toogleDarkMode">
      <div class="switch-dark-mode__circle" type="checkbox" />
      <div class="switch-dark-mode__bar" type="checkbox" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import rawMoon from '~/assets/icons/moon.svg?raw'

export default {
  data () {
    return { rawMoon }
  },

  computed: {
    ...mapGetters({
      isDarkMode: 'settings/isDarkMode'
    }),

    classSwitchDarkMode () {
      return {
        'switch-dark-mode--active': this.isDarkMode
      }
    }
  },

  methods: {
    toogleDarkMode () {
      this.$store.commit('settings/toogleIsDarkMode')
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

  $self: &;
  z-index: 0;
  position: relative;
  font-size: 14px;
  line-height: 1.5;
  @include flex-and-center-vertical;

  &__icon {
    fill: var(--icon-fill);
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__text {
    display: inline-block;
    white-space: nowrap;
  }

  &__control {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  &__circle {
    position: absolute;
    top: 2px;
    right: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s, transform 0.2s;
  }

  &__bar {
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 7px;
    width: 36px;
    height: 14px;
    background-color: #9494944d;
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
  }

  // Modifiers
  &--active {
    #{$self}__circle {
      background-color: $main-color;
      transform: translateX(16px);
    }
  }
}
</style>
