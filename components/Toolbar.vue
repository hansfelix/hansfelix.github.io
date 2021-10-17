<template>
  <section class="toolbar" :class="classToolbar">
    <div class="toolbar__logo">
      <ButtonHome />
    </div>

    <div class="toolbar__hamburguer">
      <ButtonHamburger :active.sync="isContentVisible" />
    </div>

    <!-- Modal backdrop -->
    <transition name="fade">
      <div
        v-if="isContentVisible"
        class="toolbar__content__backdrop"
        @click="isContentVisible = false"
      />
    </transition>

    <div class="toolbar__nav">
      <NuxtLink class="toolbar__link" to="#element">
        {{ $t('links.aboutMe') }}
      </NuxtLink>
      <NuxtLink class="toolbar__link" to="#portfolio">
        {{ $t('links.portfolio') }}
      </NuxtLink>
      <NuxtLink class="toolbar__link" to="#contact">
        {{ $t('links.contact') }}
      </NuxtLink>
    </div>

    <div class="toolbar__actions">
      <div class="toolbar__dark_mode">
        <SwitchDarkMode />
      </div>
      <div class="toolbar__language">
        <DropdownLanguage />
      </div>
    </div>

    <div
      class="toolbar__content"
      :class="{ 'toolbar__content--active': isContentVisible }"
    ></div>
  </section>
</template>

<script>
import ButtonHome from '~/components/buttons/ButtonHome'
import SwitchDarkMode from '~/components/ui/SwitchDarkMode'
import ButtonHamburger from '~/components/ui/ButtonHamburger'
import DropdownLanguage from '~/components/ui/DropdownLanguage'

export default {
  components: {
    ButtonHome,
    SwitchDarkMode,
    DropdownLanguage,
    ButtonHamburger
  },

  data () {
    return {
      isContentVisible: false,
      compressed: false
    }
  },

  computed: {
    classToolbar () {
      return {
        'toolbar--compressed': this.compressed
      }
    }
  },

  created () {
    // TODO:
    // window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (e) {
      const currentScrollPos = window.pageYOffset

      if (currentScrollPos > 20) {
        this.compressed = true
      } else {
        this.compressed = false
      }

      // console.log('this', e)
    }
  }
}
</script>

<style lang="scss">
// Variables in dark mode
.dark-mode .toolbar {
  --link-text-color: #{$text-color-dark};
}

.toolbar {
  --link-text-color: #{$text-color};

  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: var(--toolbar-height);
  background-color: var(--background-color);
  transition: var(--main-transition);
  z-index: 10;

  &__logo {
    height: 100%;
    width: 100px; // to get a square width: 100px
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 30px;
    transition: var(--main-transition);

    & svg {
      max-width: 40px;
      max-height: 40px;
    }

    @include mq($until: tablet) {
      width: var(--toolbar-height);
    }
  }

  &__hamburguer {
    display: none;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    @include mq($until: tablet) {
      display: flex;
      z-index: 300;
    }
  }

  &__content {
    padding: 0 20px;
    @include flex-and-center-vertical;

    @include mq($until: tablet) {
      flex-direction: column-reverse;
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100%;
      padding-top: 60px;
      background: var(--main-color);
      transform: translateX(100%);
      transition: 0.25s transform ease-in-out;
      z-index: 200;
    }

    &__backdrop {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(7, 7, 7, 0.6);
      z-index: 1;
    }

    &--active {
      transform: translateX(0);
    }
  }

  &__nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @include mq($until: tablet) {
      @include flex-and-center;
      flex-direction: column;
    }
  }

  &__actions {
    flex: 0;
    display: flex;
    align-items: center;
    @include flex-and-center-vertical;
  }

  &__link {
    position: relative;
    display: inline-block;
    padding: 0 10px 10px;
    color: var(--link-text-color);
    font-size: 16px;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 20px;
    }
    &.is-active {
      color: black;
      font-weight: 500;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: black;
        height: 2px;
        border-radius: 20px;
        width: 100%;
      }
    }

    &__dark_mode {
      margin-right: 15px;
    }

    &__language {
      min-height: 50px;
      min-width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include mq($until: tablet) {
      margin: 0 0 24px 0;
      font-size: 18px;
    }
  }

  @include mq($until: tablet) {
    padding: 0 10px;

    &__logo {
      padding: 10px;
    }
  }
}

// Modifiers
.toolbar {
  &--compressed {
    --toolbar-height: 70px;

    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.2);
  }
}
</style>
