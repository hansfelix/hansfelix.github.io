<template>
  <div>
    <div
      id="maskDiv"
      style="width:1280px; height:500px; background: -webkit-linear-gradient(left, rgb(0, 156, 204), rgb(0, 111, 145)); clip-path: url(#maskRect1);"
    ></div>

    <svg
      class="shape-top-background"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 350"
    >
      <defs>
        <clipPath id="maskRect1">
          <path
            d="M19.1,2.9c0.5-1,1.2-1.9,1.9-2.9l479,0v267.9c-13.1,30-31,53.5-55.6,64.8c-98.6,45.5-257.4-4-345.5-89.8
	C10.9,157.1-25.5,89.3,19.1,2.9z"
          />
        </clipPath>

        <linearGradient id="MyGradient">
          <stop offset="5%" stop-color="#15EDED" />
          <stop offset="95%" stop-color="#029CF5" />
        </linearGradient>
        <pattern id="img1" width="1" height="1">
          <image xlink:href="/background/hans-recorte.png" width="100" height="100" />
        </pattern>
      </defs>

      <path
        fill="url(#img1)"
        stroke="black"
        stroke-width="4"
        d="M19.1,2.9c0.5-1,1.2-1.9,1.9-2.9l479,0v267.9c-13.1,30-31,53.5-55.6,64.8c-98.6,45.5-257.4-4-345.5-89.8
	C10.9,157.1-25.5,89.3,19.1,2.9z"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shape-top-background {
  height: 90vh;
  position: absolute;
  top: 0;
  right: 0;

  /* fill: url(#MyGradient); */
}
</style>