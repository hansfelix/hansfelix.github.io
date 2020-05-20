<template>
  <div class="dropdown-language" v-bind:class="{ 'is-active': isDropdownActive }" v-click-outside="away">
    <div class="dropdown-language__trigger" @click="isDropdownActive = !isDropdownActive">
      <div class="dropdown-language__icon" v-html="rawLangugage"></div>
      <span>{{ $i18n.locale }}</span>
    </div>
    <div class="dropdown-language__menu" v-if="isDropdownActive">
      <nuxt-link class="dropdown-language__menu-item" :to="switchLocalePath('en')">EN - English</nuxt-link>
      <nuxt-link class="dropdown-language__menu-item" :to="switchLocalePath('es')">ES - Español</nuxt-link>
    </div>
  </div>
</template>

<script>
import rawLangugage from "~/assets/icons/language.svg?raw";

export default {
  data() {
    return {
      rawLangugage,
      isDropdownActive: false
    };
  },

  methods: {
    away() {
      this.isDropdownActive = false;
    }
  }
};
</script>

<style lang="scss">
.dark-mode .dropdown-language {
  --icon-fill: #{$text-color-dark};
}

.dropdown-language {
  --icon-fill: #{$text-color};

  position: relative;

  &__trigger {
    @include flex-and-center-vertical;

    text-transform: uppercase;
    cursor: pointer;
  }

  &__icon {
    fill: var(--icon-fill);
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__menu {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(calc(100% + 10px));
    background: white;
    white-space: nowrap;
    border-radius: 4px;
  }

  &__menu-item {
    display: block;
    text-decoration: none;
    padding: 10px 15px;

    &:first-child {
      border-bottom: 1px solid #9494944d;
    }
  }
}
</style>
