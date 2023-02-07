<template>
    <section class="index-page">
        <div class="index-page__presentation">
            <h1>Hi! My name is Hans Felix 👋</h1>
        </div>
        <div class="index-page__about-me">
            <div>ABOUT ME</div>
            <p>A software developer based in Peru, I create web applications that help people develop their ideas and grow their businesses. I make my own designs.</p>
        </div>
        <div class="index-page__about-this-site">
            <div>ABOUT THIS SITE</div>
            <p>A beautiful, responsive, statically-generated, nuxt application written with modern javascript.</p>
        </div>
    </section>
</template>
  
<style lang="scss">
.index-page {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    display: grid;
    height: 100vh;

    &__presentation{
        grid-row: 1/3;
    }
}
</style>
