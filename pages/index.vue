<template>
  <div class="container">
    <!-- <PresentationHomeBlock /> -->
    <AboutMeHomeBlock />
    <PortfolioHomeBlock />
    <ContactHomeBlock />

    <!-- <BackgroundSvg /> -->

    <div class="social">
      <a
        class="social__item"
        href="https://www.linkedin.com/in/hans-felix/"
        target="_blank"
      >
        <LinkedinSvg class="icon" />
      </a>
      <a
        class="social__item"
        href="https://twitter.com/hansfelixramos"
        target="_blank"
      >
        <TwitterSvg class="icon" />
      </a>
      <a
        class="social__item"
        href="https://stackoverflow.com/users/9176232/hans-felix-ramos?tab=profile"
        target="_blank"
      >
        <StackoverflowSvg class="icon" />
      </a>
      <a
        class="social__item"
        href="https://github.com/hansfelix"
        target="_blank"
      >
        <GithubSvg class="icon" />
      </a>
    </div>
  </div>
</template>

<script>
// import PresentationHomeBlock from '@/components/home-blocks/PresentationHomeBlock'
import AboutMeHomeBlock from '@/components/home-blocks/AboutMeHomeBlock'
import ContactHomeBlock from '@/components/home-blocks/ContactHomeBlock'
import PortfolioHomeBlock from '@/components/home-blocks/PortfolioHomeBlock'
// icons imports
// import BackgroundSvg from '~/assets/icons/background.svg?inline'
import LinkedinSvg from '~/assets/icons/linkedin.svg?inline'
import TwitterSvg from '~/assets/icons/twitter.svg?inline'
import StackoverflowSvg from '~/assets/icons/stackoverflow.svg?inline'
import GithubSvg from '~/assets/icons/github.svg?inline'

export default {
  components: {
    // PresentationHomeBlock,
    AboutMeHomeBlock,
    ContactHomeBlock,
    PortfolioHomeBlock,
    // icons
    // BackgroundSvg,
    LinkedinSvg,
    TwitterSvg,
    StackoverflowSvg,
    GithubSvg
  }
}
</script>

<style lang="scss">

.social {
  position: fixed;
  top: 0;
  left: 2em;
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;

  &__item {
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: 0.2s background ease-in-out;
    @include flex-and-center;

    &:hover {
      background-color: #0000001a;
    }
  }

  @include mq($until: md) {
    position: static;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 20px 0 0px;
  }
}
.background {
  position: absolute;
  right: 0;
  top: 100vh;
  transform: translateY(-100%);
  opacity: 0.08;
}
</style>
