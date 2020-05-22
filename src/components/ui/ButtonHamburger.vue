<template>
  <section class="button-hamburger" :class="classButton" @click="$emit('update:active', !active)">
    <span class="button-hamburger__content hamburguer">
      <span class="button-hamburger__bar bar-1"></span>
      <span class="button-hamburger__bar bar-2"></span>
      <span class="button-hamburger__bar bar-3"></span>
    </span>
  </section>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: false
    }
  },

  computed: {
    classButton() {
      return { "button-hamburger--active": this.active };
    }
  }
};
</script>

<style lang="scss">
$hamburger-bar-color: #2980b9;
$hamgurger-bar-width: 32px;
$hamgurger-bar-height: 5px;
$hamgurger-bar-spacing: 5px;
$hamgurger-transition-speed: 0.4s;

.button-hamburger {
  $self: &;

  position: relative;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  transition: $hamgurger-transition-speed / 2;

  &:active {
    transform: scale(0.9);
  }

  &__content {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: $hamgurger-bar-width;
    height: ($hamgurger-bar-height * 3) + ($hamgurger-bar-spacing * 2);
    transition: $hamgurger-transition-speed;
  }

  &__bar {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: $hamgurger-bar-width;
    height: $hamgurger-bar-height;
    background: $hamburger-bar-color;
    transition: $hamgurger-transition-speed / 2;
    outline: 1px solid transparent;
  }

  .bar-1 {
    transform: rotate(0) translate3d(0, -($hamgurger-bar-height * 2), 0);
  }

  .bar-3 {
    transform: rotate(0) translate3d(0, ($hamgurger-bar-height * 2), 0);
  }

  // Modifiers
  &--active {
    #{$self}__content {
      transform: rotate(180deg);

      .bar-1 {
        transform: rotate(45deg) translate3d(0, 0, 0);
      }
      .bar-2 {
        opacity: 0;
      }
      .bar-3 {
        transform: rotate(-45deg) translate3d(0, 0, 0);
      }
    }
  }
}
</style>
