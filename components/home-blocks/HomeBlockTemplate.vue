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
</style>
