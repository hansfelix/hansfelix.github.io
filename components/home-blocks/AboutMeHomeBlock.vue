<template>
  <HomeBlockTemplate id="about-me">
    <div class="about-me">
      <div class="about-me__text">
        <h2 class="about-me__title">{{ $t('index.aboutMe') }}</h2>
        <div v-html="$t('index.aboutMeText')"></div>

        <section class="about-me__tech">
          <div>JavaScript</div>
          <div>HTML & (S)CSS</div>
          <div>Vue</div>
          <div>Node.js</div>
          <div>C#</div>
          <div>WordPress</div>
        </section>
      </div>
      <div class="about-me__photo">
        <img src="/images/hans-felix.jpg" alt="Hans Felix" />
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
.ad{
    background-attachment: fixed;
}
</style>
