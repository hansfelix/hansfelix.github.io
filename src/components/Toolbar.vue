<template>
  <section class="toolbar">
    <div class="toolbar__logo">
      <MainLogo />
    </div>

    <div class="toolbar__hamburguer">
      <ButtonHamburger :active.sync="isContentVisible" />
    </div>

    <transition name="fade">
      <div class="toolbar__content__backdrop" @click="isContentVisible = false" v-if="isContentVisible"></div>
    </transition>
    <div class="toolbar__content" :class="{ 'toolbar__content--active': isContentVisible }">
      <div class="toolbar__nav">
        <a class="toolbar__link" href="#">{{ $t("links.aboutMe") }}</a>
        <a class="toolbar__link" href="#">{{ $t("links.work") }}</a>
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
import MainLogo from "~/components/MainLogo";
import SwitchDarkMode from "~/components/ui/SwitchDarkMode";
import ButtonHamburger from "~/components/ui/ButtonHamburger";
import DropdownLanguage from "~/components/ui/DropdownLanguage";

export default {
  components: {
    MainLogo,
    SwitchDarkMode,
    DropdownLanguage,
    ButtonHamburger
  },

  data() {
    return {
      isContentVisible: false
    };
  }
};
</script>

<style lang="scss">
// Variables in dark mode
.dark-mode .toolbar {
  --link-text-color: #{$text-color-dark};
}

.toolbar {
  --link-text-color: #{$text-color};
  --toolbar-height: 100px;

  display: flex;
  height: var(--toolbar-height);
  box-shadow: 1px 0px 13px -13px #000, 9px 0 8px -9px rgba(0, 0, 0, 0.18), 1px 0 13px -13px #000;
  transition: 0.3s all ease-in-out;

  &__logo {
    height: 100%;
    width: var(--toolbar-height); // to get a square
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    & img {
      max-width: 100%;
      max-height: 100%;
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
    flex: 1;
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
      background: #2c363e;
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

    @include mq($until: tablet) {
      @include flex-and-center;
      flex-direction: column;
    }
  }

  &__actions {
    flex: 0;
    @include flex-and-center-vertical;
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

  &__link {
    position: relative;
    display: inline-block;
    padding: 0 10px 10px;
    margin-right: 20px;
    color: var(--link-text-color);
    font-size: 16px;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #9494944d;
      height: 3px;
      width: 100%;
    }

    @include mq($until: tablet) {
      margin: 0 0 24px 0;
      font-size: 18px;
    }
  }

  @include mq($until: tablet) {
    --toolbar-height: 70px;

    padding: 0 10px;

    &__logo {
      padding: 10px;
    }
  }
}
</style>
