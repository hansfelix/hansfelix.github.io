<template>
  <HomeBlockTemplate id="main">
    <div class="main-text">
      <div class="main-text__overline">{{ $t('index.overline') }}</div>
      <h1 class="main-text__title">Hans Felix</h1>
      <div class="main-text__description">{{ $t('index.desciption') }}</div>
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

<style>
</style>
