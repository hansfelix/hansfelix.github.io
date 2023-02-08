<template>
    <section class="index-page">
        <div class="index-page__presentation">
            <h1 class="index-page__presentation-text">Hi! 👋 <br /> My name is <br /><strong>Hans Felix</strong></h1>
            <button> PROTAFOLIO</button>
            <img class="index-page__presentation-img" src="/img/hans-felix-bw.png" alt="Hans Felix" />
        </div>
        <div class="index-page__about-me">
            <div class="index-page__about-me-title">
                <svg class="index-page__about-me-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 9.5 17" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M1 1l7.5 7.5-7.5 7.5"></path>
                </svg>
                <span>ABOUT ME</span>
            </div>
            <p>A software developer based in Peru, I create web applications that help people develop their ideas and
                grow their businesses. I make my own designs.</p>
        </div>
        <div class="index-page__about-this-site">
            <div class="index-page__about-this-site-title">
                <svg class="index-page__about-this-site-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 9.5 17" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M1 1l7.5 7.5-7.5 7.5"></path>
                </svg>
                <span>ABOUT THIS SITE</span>
            </div>
            <p>A beautiful, responsive, statically-generated with nuxt application written with modern javascript.</p>
        </div>
    </section>
</template>
  
<style lang="scss">
// space used on padding or margin in order to avoid hit the main image
$space-out-image: 1rem;

.index-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: calc(100vh - 100px); // 100px minus due to header
    padding: 0 1.5rem;
    overflow: hidden; // Due this container has a img overflowing

    @include mq($from: tablet) {
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    &__presentation {
        display: flex;
        align-items: center;
        grid-row: 1/3;
        position: relative;
    }

    &__presentation-text {
        max-width: 65%; // result of 45% + 20% right from img
        font-size: 2.75rem;
        font-weight: 400;
        letter-spacing: 1px;
        padding-right: $space-out-image; // Avoid text hit with image
        box-sizing: border-box;

        @include mq($from: tablet) {
            font-size: 3.5rem;
            max-width: 45%; // Text and img sum 100%
        }
    }

    &__presentation-img {
        position: absolute;
        width: 55%;
        right: -20%;
        bottom: 0;

        @include mq($from: tablet) {
            max-width: 55%; // Text and img sum 100%
            right: 0;
        }
    }

    &__about-me {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__about-me-title {
        color: var(--primary-color);
        font-weight: 500;
    }

    &__about-me-icon {
        display: inline-block;
        vertical-align: middle;
        height: 0.9rem;
        margin-right: 0.5rem;
    }

    &__about-this-site {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include mq($from: tablet) {
            padding-left: $space-out-image * 4;
        }
    }

    &__about-this-site-title {
        color: var(--primary-color);
        font-weight: 500;
    }

    &__about-this-site-icon {
        display: inline-block;
        vertical-align: middle;
        height: 0.9rem;
        margin-right: 0.5rem;
    }
}
</style>
