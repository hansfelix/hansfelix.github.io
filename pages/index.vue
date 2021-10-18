<template>
  <div class="container">
    <!-- <PresentationHomeBlock /> -->
    <AboutMeHomeBlock />
    <PortfolioHomeBlock />
    <ContactHomeBlock />

    <!-- <BackgroundSvg /> -->
  </div>
</template>

<script>
// import PresentationHomeBlock from '@/components/home-blocks/PresentationHomeBlock'
import AboutMeHomeBlock from '@/components/home-blocks/AboutMeHomeBlock'
import ContactHomeBlock from '@/components/home-blocks/ContactHomeBlock'
import PortfolioHomeBlock from '@/components/home-blocks/PortfolioHomeBlock'

export default {
  components: {
    // PresentationHomeBlock,
    AboutMeHomeBlock,
    ContactHomeBlock,
    PortfolioHomeBlock
    // icons
    // BackgroundSvg,
  }
}
</script>

<style lang="scss">
.background {
  position: absolute;
  right: 0;
  top: 100vh;
  transform: translateY(-100%);
  opacity: 0.08;
}
</style>
