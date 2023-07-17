<template>
    <div>
        <section class="index-block is-first">
            <div class="container">
                <div class="about-us">
                    <div>
                        <div class="main-text">
                            <div class="main-text__overline">Hi! My name is</div>
                            <h1 class="main-text__title">Hans Felix</h1>
                        </div>
                        <p>
                            I am an experienced software developer based in Peru, specializing in building exceptional
                            websites. Occasionally designing. Passionate about combining beautiful code with beautiful
                            design.
                        </p>
                        <button>VER TRABAJOS</button>
                        <button>CONTACTAR</button>
                    </div>
                    <div class="main-img__wrapper">
                        <img class="main-img" src="test.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="index-block">
            <div class="container">
                Recent Projects
            </div>
        </section>
        <section class="index-block is-last">
            <div class="container">
                <!-- TODO: Hacer el link mas bonito-->
                <h2>Interested in working together?</h2>
                <p>If you wanna get in touch, talk to me about a project collaboration or just say hi, send me an email to
                    hansfelixramos@gmail.com I'll try my best to get back to you! We can also be in contact through any of
                    my social networks
                </p>
                <!-- TODO: Hacer el link mas bonito-->
                <div>REDES SOCIALES</div>
            </div>
        </section>
    </div>
</template>
    
<script setup>
definePageMeta({
  title: 'My home page'
})

const colorMode = useColorMode()
const colorModes = ref(colorMode);
</script>

<style lang="scss">
.index-block {
    // TODO: Improve creating globlas scss vars and calc height
    min-height: 100vh;
    padding: 2.5rem 0;

    display: flex;
    align-items: center;

    &.is-first {
        min-height: calc(100vh - var(--header-height));
    }

    &.is-last {
        min-height: calc(100vh - var(--footer-height));
    }
}

.about-us {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1rem;

    @include mq.mq($from: medium) {
        grid-template-columns: 2fr 1fr;
    }
}

.main-text {
    &__title {
        font-size: 4rem;
        font-weight: 500;
        margin: 0 0 .5rem;
    }
}

.main-img {
    background-color: var(--header-background);
    transition: background-color var(--main-transition);

    &__wrapper {
        border-radius: 50%;
        line-height: 0;
        overflow: hidden;
    }
}
</style>