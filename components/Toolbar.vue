<template>
  <section class="toolbar">
    <div class="toolbar__logo">
      <MainLogo />
    </div>
    <div class="toolbar__spacer"></div>
    <div class="toolbar__dark_mode">
      <ThemeButton />
    </div>
    <div class="toolbar__language">EN</div>
  </section>
</template>

<script>
import MainLogo from "~/components/MainLogo";
import ThemeButton from '~/components/ThemeButton';
export default {
  components: {
    MainLogo,
    ThemeButton
  }
};
</script>

<style lang="scss">
// Variables in dark mode
.dark-mode .toolbar {
  --toolbar-background: #2c2c2c;
}

.toolbar {
  --toolbar-background: #fff;

  display: flex;
  flex-direction: column;
  background-color: var(--toolbar-background);
  box-shadow: 1px 0px 13px -13px #000, 9px 0 8px -9px rgba(0, 0, 0, 0.18),
    1px 0 13px -13px #000;
  transition: 0.3s all ease-in-out;

  &__logo {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__spacer {
    flex: 1;
  }

  &__dark_mode {
    min-height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__language {
    min-height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @include mq($until: tablet) {
    height: 100%;
    flex-direction: row;
    box-shadow: 0px 1px 13px -13px #000, 0 9px 8px -9px rgba(0, 0, 0, 0.18),
      0 1px 13px -13px #000;

    &__logo {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 10px;
    }

    &__spacer {
      display: none;
    }

    &__dark_mode {
      order: -1;
    }
  }
}
</style>