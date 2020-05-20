<template>
  <section class="switch-dark-mode" :class="classSwitchDarkMode">
    <span class="switch-dark-mode__text">{{ $t("ui.darkMode") }}</span>
    <div class="switch-dark-mode__control" @click="toogleDarkMode">
      <div class="switch-dark-mode__circle" type="checkbox"></div>
      <div class="switch-dark-mode__bar" type="checkbox"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      isDarkMode: "settings/isDarkMode"
    }),

    classSwitchDarkMode() {
      return {
        "switch-dark-mode--active": this.isDarkMode
      };
    }
  },

  methods: {
    toogleDarkMode() {
      this.$store.commit("settings/toogleIsDarkMode");
    }
  }
};
</script>

<style lang="scss">
.switch-dark-mode {
  $self: &;
  z-index: 0;
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
  @include flex-and-center-vertical;

  &__text {
    display: inline-block;
    width: 100%;
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
