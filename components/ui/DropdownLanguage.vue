<template>
  <div v-click-outside="away" class="dropdown-language">
    <div
      class="dropdown-language__selector"
      :class="{ 'is-active': isDropdownActive }"
      @click="isDropdownActive = !isDropdownActive"
    >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        width="20px"
        height="20px"
        class=""
      >
        <path
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20px"
        height="20px"
        fill="currentColor"
        aria-hidden="true"
        class=""
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <transition name="bounce">
      <div v-if="isDropdownActive" class="dropdown-language__menu">
        <nuxt-link
          class="dropdown-language__menu-item"
          :to="switchLocalePath('en')"
        >
          EN - English
        </nuxt-link>
        <nuxt-link
          class="dropdown-language__menu-item"
          :to="switchLocalePath('es')"
        >
          ES - Español
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDropdownActive: false
    }
  },

  methods: {
    away () {
      this.isDropdownActive = false
    }
  }
}
</script>

<style lang="scss">
.dark-mode .dropdown-language {
  --icon-fill: #{$text-color-dark};
}

.dropdown-language {
  --icon-fill: #{$text-color};

  position: relative;

  &__selector {
    display: flex;
    cursor: pointer;

    &.is-active {
      color: var(--accent-color);
    }
  }

  &__menu {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    background: white;
    white-space: nowrap;
    border-radius: 4px;
    z-index: 100;
  }

  &__menu-item {
    display: block;
    text-decoration: none;
    padding: 10px 15px;

    &:first-child {
      border-bottom: 1px solid #9494944d;
    }
    // As we use hash for routes, nuxt print is-exact-active to handle paths, query and hash
    &.is-exact-active {
      color: var(--accent-color);
    }
  }
}
</style>
