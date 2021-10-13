<template>
  <HomeBlockTemplate id="main">
    <div class="presentation-home">
      <div class="presentation-home__overline">
        {{ $t('index.overline') }}
      </div>
      <h1 class="presentation-home__title">Hans Felix</h1>
      <div class="presentation-home__description">
        {{ $t('index.desciption') }}
      </div>
    </div>
  </HomeBlockTemplate>
</template>

<script>
import HomeBlockTemplate from './HomeBlockTemplate.vue'
export default {
  components: {
    HomeBlockTemplate
  }
}
</script>

<style lang="scss">
.presentation-home {
  align-self: center;
  &__overline {
    color: $main-color;
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
  }

  &__title {
    font-size: 75px;
    font-weight: 500;
    letter-spacing: -1px;
    margin: 0 0 15px;
  }

  &__description {
    max-width: 600px;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
