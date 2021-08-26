<template>
  <section class="index-contact" id="contact">
    <div class="index-contact__content">
      <!-- <h2 class="index-contact__title">Get in touch!</h2> -->
      <h2 class="index-contact__title">Interested in working together?</h2>
      <p class="index-contact__text">
        If you wanna get in touch, talk to me about a project collaboration or just say hi, send me an email to hansfelixramos@gmail.com I'll try my
        best to get back to you! We can also be in contact through any of my social networks
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.index-contact {
  min-height: 100vh;
  @include flex-and-center-vertical;

  &__content {
  }

  &__pre-title {
    color: #6495b5;
    font-family: "Inconsolata", monospace;
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
</style>
