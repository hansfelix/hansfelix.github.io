<template>
  <div class="container">
    <PresentationHomeBlock />
    <AboutMeHomeBlock />
    <PortfolioHomeBlock />
    <ContactHomeBlock />

    <div class="background">
      <h-icon name="background" width="300" height="300"></h-icon>
    </div>

    <div class="social">
      <a
        class="social__item"
        href="https://www.linkedin.com/in/hans-felix/"
        target="_blank"
      >
        <h-icon name="linkedin" width="20" height="20"></h-icon>
      </a>
      <a
        class="social__item"
        href="https://twitter.com/hansfelixramos"
        target="_blank"
      >
        <h-icon name="twitter" width="20" height="20"></h-icon>
      </a>
      <a
        class="social__item"
        href="https://stackoverflow.com/users/9176232/hans-felix-ramos?tab=profile"
        target="_blank"
      >
        <h-icon name="stackoverflow" width="20" height="20"> </h-icon>
      </a>
      <a
        class="social__item"
        href="https://github.com/hansfelix"
        target="_blank"
      >
        <h-icon name="github" width="20" height="20"> </h-icon>
      </a>
    </div>
  </div>
</template>

<script>
import PresentationHomeBlock from '@/components/home-blocks/PresentationHomeBlock'
import AboutMeHomeBlock from '@/components/home-blocks/AboutMeHomeBlock'
import ContactHomeBlock from '@/components/home-blocks/ContactHomeBlock'
import PortfolioHomeBlock from '@/components/home-blocks/PortfolioHomeBlock'

export default {
  components: {
    PresentationHomeBlock,
    AboutMeHomeBlock,
    ContactHomeBlock,
    PortfolioHomeBlock
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 1300px;
  padding: 0 150px;
  margin: 0 auto;

  @include mq($until: tablet) {
    padding: 10px 25px;
  }
}

.about-me {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;

  &__photo {
    align-self: center;
    justify-self: end;

    img {
      max-width: 250px;
      border-radius: 50%;
      filter: grayscale(1);
      opacity: 0.75;
      transition: 0.2s all ease-in-out;
    }

    @include mq($until: tablet) {
      grid-row-start: 1;
      justify-self: center;

      img {
        max-width: 150px;
        margin: 10px;
      }
    }
  }

  &__text {
    align-self: center;
    justify-self: center;
    font-size: 17px;
    line-height: 1.4;

    p {
      margin-bottom: 15px;
    }
  }

  &__title {
    color: #6495b5;
    font-size: 1.8em;
    margin-bottom: 15px;
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

    @include mq($until: tablet) {
      grid-template-columns: 1fr 1fr;
    }
  }

  @include mq($until: tablet) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1;
  }
}

.social {
  position: fixed;
  top: 0;
  left: 0;
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

  @include mq($until: tablet) {
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
