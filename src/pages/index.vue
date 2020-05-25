<template>
  <div class="container">
    <div class="main-text">
      <div class="main-text__overline">{{ $t("index.overline") }}</div>
      <h1 class="main-text__title">Hans Felix</h1>
      <div class="main-text__description">{{ $t("index.desciption") }}</div>
    </div>

    <div class="about-me">
      <div class="about-me__text">
        Hello! I'm Brittany, a software engineer based in Boston, MA. I enjoy creating things that live on the internet, whether that be websites,
        applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. Shortly after
        graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and
        meaningful projects on a daily basis. Here are a few technologies I've been working with recently:
      </div>
      <div class="about-me__photo">

        <img src="/images/hans-felix.jpg" alt="Hans Felix">
      </div>
    </div>

    <div class="background">
      <h-icon name="background" width="300" height="300"></h-icon>
    </div>

    <div class="social">
      <a class="social__item" href="https://www.linkedin.com/in/hans-felix/" target="_blank">
        <h-icon name="linkedin" width="20" height="20"></h-icon>
      </a>
      <a class="social__item" href="https://twitter.com/hansfelixramos" target="_blank">
        <h-icon name="twitter" width="20" height="20"></h-icon>
      </a>
      <a class="social__item" href="https://stackoverflow.com/users/9176232/hans-felix-ramos?tab=profile" target="_blank">
        <h-icon name="stackoverflow" width="20" height="20"> </h-icon>
      </a>
      <a class="social__item" href="https://github.com/hansfelix" target="_blank">
        <h-icon name="github" width="20" height="20"> </h-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  padding: 10px 150px;
  margin: 0 auto;

  @include mq($until: tablet) {
    padding: 10px 25px;
  }
}

.main-text {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__overline {
    color: $main-color;
    font-family: "Inconsolata", monospace;
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

.about-me {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;
  align-self: center;
    justify-self: center;

  img{
    max-width: 250px;
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
