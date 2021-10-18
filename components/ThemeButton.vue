<template>
  <div
    class="theme-button"
    :class="classThemeButton"
    @click="$store.commit('settings/toogleIsDarkMode')"
  >
    <div class="circle">
      <div class="crescent"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      theme: 'light'
    }
  },

  computed: {
    ...mapGetters({
      isDarkMode: 'settings/isDarkMode'
    }),

    classThemeButton () {
      return {
        'theme-button--dark': this.isDarkMode,
        'theme-button--light': !this.isDarkMode
      }
    }
  },

  mounted () {
    // Check: https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    this.theme = isDarkMode ? 'dark' : 'light'
  }
}
</script>

<style lang="scss">
.theme-button {
  .circle {
    position: relative;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin: auto;
  }

  .crescent {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 14px;
    height: 14px;
    background: white;
    transform-origin: top right;
    transition: all 0.3s ease-in-out;
  }
}

.theme-button--light {
  .circle {
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  }
  .crescent {
    transform: scale(0);
  }
}

.theme-button--dark {
  .circle {
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
  }
  .crescent {
    background: #2c2c2c;
    transform: scale(1);
  }
}
</style>
