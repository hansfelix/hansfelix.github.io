<template>
  <section class="default-layout">
    <toolbar />
    <nuxt />
  </section>
</template>

<script>
import Toolbar from '~/components/Toolbar'

export default {
  components: {
    Toolbar
  },

  computed: {}
}
</script>

<style lang="scss">
.dark-mode.default-layout {
  --constrast-background-color-25: rgb(256, 256, 256, 0.1);
}

.default-layout {
  color: var(--text-color);
  background-color: var(--background-color);
  transition: var(--main-transition);
  overflow: hidden;

  @include mq($until: tablet) {
  }
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
