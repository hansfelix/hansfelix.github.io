<template>
  <section class="toolbar">
    <div class="toolbar__logo">
      <MainLogo />
    </div>
    <div class="toolbar__content">
      <div class="toolbar__nav">
        <a class="toolbar__link" href="#">{{ $t("links.aboutMe") }}</a>
        <a class="toolbar__link" href="#">{{ $t("links.work") }}</a>
      </div>

      <div class="toolbar__actions">
        <div class="toolbar__dark_mode">
          <ThemeButton />
        </div>
        <div class="toolbar__language">EN</div>
      </div>
    </div>
  </section>
</template>

<script>
import MainLogo from "~/components/MainLogo";
import ThemeButton from "~/components/ThemeButton";
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
}

.toolbar {
  display: flex;
  height: 100px;
  box-shadow: 1px 0px 13px -13px #000, 9px 0 8px -9px rgba(0, 0, 0, 0.18), 1px 0 13px -13px #000;
  transition: 0.3s all ease-in-out;

  &__logo {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__content {
    flex: 1;
    @include flex-and-center-vertical;
  }

  &__nav {
    flex: 1;
  }

  &__actions {
    flex: 0;
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

  &__link {
    position: relative;
    display: inline-block;
    padding: 0 10px 10px;
    margin-right: 20px;
    color: #707070;
    font-size: 16px;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #dfdfdf;
      height: 3px;
      width: 100%;
    }
  }

  @include mq($until: tablet) {
    flex-direction: row;
    box-shadow: 0px 1px 13px -13px #000, 0 9px 8px -9px rgba(0, 0, 0, 0.18), 0 1px 13px -13px #000;

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
