<template>
  <HomeBlockTemplate id="about-me">
    <div class="about-me">
      <div class="about-me__first-text">
        <div class="about-me__first-text-greeting">
          {{ $t('index.overline') }}
        </div>
        <h2 class="about-me__first-text-name">Hans Felix</h2>
        <div class="about-me__first-text-description">
          {{ $t('index.description') }}
        </div>
        <Lines45Svg class="icon" />
      </div>
      <div class="about-me__photo">
        <img class="image" src="/images/hans-felix.png" alt="Hans Felix" />
      </div>
      <div class="about-me__second-text">
        Está página la he diseñado para poder customizarla , porfavor intenta
        aqui:
      </div>
    </div>
  </HomeBlockTemplate>
</template>

<script>
import HomeBlockTemplate from './HomeBlockTemplate.vue'
import Lines45Svg from '~/assets/icons/lines45.svg?inline'

export default {
  components: {
    HomeBlockTemplate,
    Lines45Svg
  }
}
</script>

<style lang="scss">
.ad {
  background-attachment: fixed;
}

.about-me {
  // height: 100%;
  align-self: center;
  display: grid;
  grid-template-rows: 1fr 1;

  @include mq($from: md) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }

  @include mq($from: lg) {
    grid-template-columns: 3fr auto 2fr;
  }

  &__photo {
    align-self: center;
    justify-self: end;

    img {
      // max-width: 250px;
      border-radius: 50%;
      opacity: 0.75;
      transition: 0.2s all ease-in-out;
    }

    @include mq($until: md) {
      grid-row-start: 1;
      justify-self: center;
    }
  }

  &__first-text {
    justify-self: center;
    // line-height: 1.4;

    // p {
    //   margin-bottom: 15px;
    // }
  }

  &__first-text-greeting {
    font-family: 'Inconsolata', monospace;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  &__first-text-description {
    line-height: 1.5em;
    font-size: 1.2rem;
  }
  &__second-text {
    align-self: flex-end;
  }
  &__first-text-name {
    color: var(--accent-color);
    font-size: 3em;
    margin-bottom: 10px;
    font-weight: normal;
  }

  &__tech {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;

    //TODO: Add custom class for this div
    div:before {
      content: '-';
      margin-right: 5px;
    }

    @include mq($until: md) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
