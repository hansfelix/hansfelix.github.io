<template>
  <svg class="h-icon" :class="classIcon" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <title v-if="title">{{ title }}</title>
    <g v-html="iconPath" :fill="color"></g>
  </svg>
</template>

<script>
export default {
  name: "h-icon",

  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "24"
    },
    height: {
      type: String,
      default: "24"
    },
    color:{
      type: String,
      default: "currentColor"
    }
  },

  computed: {
    iconPath() {
      let iconRaw = require(`~/assets/icons/${this.name}.svg?raw`);
      return iconRaw;
    },

    classIcon() {
      return {};
    }
  }
};
</script>

<style lang="scss">
.l-icon {
  fill: currentColor;
}
</style>
