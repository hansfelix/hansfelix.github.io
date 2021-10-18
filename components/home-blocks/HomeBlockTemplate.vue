<template>
  <section class="home-block" :id="id">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.home-block {
  min-height: 100vh;
  padding-top: var(--toolbar-height);
  display: grid;
}
</style>
