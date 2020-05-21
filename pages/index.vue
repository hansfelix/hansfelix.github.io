<template>
  <div class="container">
    <p>Hola</p>
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
    transition: .2s background ease-in-out;
    @include flex-and-center;

    &:hover {
      background-color: #0000001a;
    }
  }
}
</style>
