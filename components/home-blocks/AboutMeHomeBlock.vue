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

        <MochicaDetailSvg class="about-me__icon-mochica-detail" />
      </div>
      <div class="about-me__photo">
        <img class="image" src="/images/hans-felix.png" alt="Hans Felix" />
        <MochePatternSvg class="about-me__icon-moche-pattern" />
        <GitSvg class="about-me__icon-git" />
      </div>
      <div class="about-me__second-text">
        {{ $t('index.playgroundText') }}
        <button href="button is-link">Configuración</button>
      </div>
    </div>
  </HomeBlockTemplate>
</template>

<script>
import HomeBlockTemplate from './HomeBlockTemplate.vue'
import MochePatternSvg from '~/assets/icons/moche-pattern.svg?inline'
import MochicaDetailSvg from '~/assets/icons/anden-patern.svg?inline'
import GitSvg from '~/assets/icons/git.svg?inline'

export default {
  components: {
    HomeBlockTemplate,
    MochePatternSvg,
    MochicaDetailSvg,
    GitSvg
  }
}
</script>

<style lang="scss">
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
    grid-template-columns: 3fr 4fr 2fr;
  }

  &__photo {
    position: relative;
    align-self: center;
    justify-self: end;
    font-size: 0;

    &:after {
      width: 100%;
      height: 100%;
      display: inline-block;
      content: '';
      -webkit-mask: url('/images/hans-felix-before.svg') no-repeat 50% 50%;
      mask: urlurl('/images/hans-felix-before.svg') no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;
      background-color: var(--accent-color);
      z-index: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: 0.25;
    }

    img {
      position: relative;
      z-index: 30;
      transition: 0.2s all ease-in-out;
    }

    @include mq($until: md) {
      grid-row-start: 1;
      justify-self: center;
    }
  }

  &__icon-mochica-detail {
    width: 160px;
    stroke: var(--text-color);
    stroke-width: 0.3px;
  }
  &__icon-moche-pattern {
    position: absolute;
    width: 100px;
    top: 75%;
    left: -5%;
    fill: var(--text-color);
    z-index: 100;
    mix-blend-mode: multiply;
  }
  &__icon-git {
    position: absolute;
    width: 40px;
    top: 30%;
    right: 0px;
    fill: var(--accent-color);
    z-index: 100;
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
