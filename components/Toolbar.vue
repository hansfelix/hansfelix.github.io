<template>
  <section class="toolbar" :class="classToolbar">
    <div class="container">
      <div class="toolbar__hamburguer">
        <ButtonHamburger :active.sync="isContentVisible" />
      </div>

      <div class="toolbar__logo">
        <ButtonHome />
      </div>

      <!-- Modal backdrop -->
      <transition name="fade">
        <div
          v-if="isContentVisible"
          class="toolbar__content__backdrop"
          @click="isContentVisible = false"
        />
      </transition>

      <div
        class="toolbar__content"
        :class="{ 'toolbar__content--active': isContentVisible }"
      >
        <div class="toolbar__nav">
          <NuxtLink
            class="toolbar__link"
            to="#about-me"
            @click.native="isContentVisible = false"
          >
            {{ $t('links.aboutMe') }}
          </NuxtLink>
          <NuxtLink
            class="toolbar__link"
            to="#portfolio"
            @click.native="isContentVisible = false"
          >
            {{ $t('links.portfolio') }}
          </NuxtLink>
          <NuxtLink
            class="toolbar__link"
            to="#contact"
            @click.native="isContentVisible = false"
          >
            {{ $t('links.contact') }}
          </NuxtLink>
        </div>
      </div>

      <div class="toolbar__actions">
        <div class="toolbar__dark_mode">
          <SwitchDarkMode />
        </div>
        <div class="toolbar__language">
          <DropdownLanguage />
        </div>
      </div>
    </div>
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
:root {
  --toolbar-background-color: #dcdcd9;
  --sidebar-background-color: #212121;
  &.dark-mode {
    --toolbar-background-color: #181818;
    --sidebar-background-color: #212121;
  }
}

// Variables in dark mode
.dark-mode .toolbar {
  --link-text-color: #{$text-color-dark};
}

.toolbar {
  --link-text-color: #{$text-color};

  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--toolbar-background-color);
  transition: var(--main-transition);

  z-index: 10;

  > .container {
    display: flex;
    height: var(--toolbar-height);
  }

  &__logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 30px;
    transition: var(--main-transition);

    & svg {
      max-width: 40px;
      max-height: 40px;
    }

    @include mq($until: md) {
      width: var(--toolbar-height);
      flex: 1;
    }
  }

  &__hamburguer {
    display: none;
    align-items: center;

    @include mq($until: md) {
      display: flex;
      z-index: 300;
    }
  }

  &__content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include mq($until: md) {
      background-color: var(--sidebar-background-color);
      flex-direction: column-reverse;
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100%;
      padding-top: 60px;
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
    @include mq($until: md) {
      @include flex-and-center;
      flex-direction: column;
      align-items: flex-end;
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
    &:hover {
      color: var(--text-color-accent);
    }
    &.is-active {
      color: var(--accent-color);
      font-weight: 500;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--accent-color);
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

    @include mq($until: md) {
      margin: 0 0 24px 0;
      font-size: 18px;

      // Null margin right, item are in vertical position
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  }

  @include mq($until: md) {
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
