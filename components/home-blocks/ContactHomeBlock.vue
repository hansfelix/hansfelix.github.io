<template>
  <HomeBlockTemplate id="contact">
    <section class="index-contact">
      <div class="index-contact__content">
        <!-- <h2 class="index-contact__title">Get in touch!</h2> -->
        <h2 class="index-contact__title">Interested in working together?</h2>
        <p class="index-contact__text">
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi, send me an email to hansfelixramos@gmail.com I'll try my
          best to get back to you! We can also be in contact through any of my
          social networks
        </p>
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
    </section>
  </HomeBlockTemplate>
</template>

<script>
import HomeBlockTemplate from './HomeBlockTemplate.vue'
// icons imports
// import BackgroundSvg from '~/assets/icons/background.svg?inline'
import LinkedinSvg from '~/assets/icons/linkedin.svg?inline'
import TwitterSvg from '~/assets/icons/twitter.svg?inline'
import StackoverflowSvg from '~/assets/icons/stackoverflow.svg?inline'
import GithubSvg from '~/assets/icons/github.svg?inline'

export default {
  components: {
    HomeBlockTemplate,
    LinkedinSvg,
    TwitterSvg,
    StackoverflowSvg,
    GithubSvg
  }
}
</script>

<style lang="scss">
.index-contact {
  min-height: 100vh;
  @include flex-and-center-vertical;

  &__content {
  }

  &__pre-title {
    color: #6495b5;
    font-family: 'Inconsolata', monospace;
    font-size: 18px;
  }
  &__title {
    color: #6495b5;
    font-size: 2em;
    margin-bottom: 15px;
  }

  &__text {
    font-size: 17px;
    line-height: 1.4;
  }
}

.social {
  display: flex;
  justify-content: flex-end;

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
</style>
