<template>
    <section class="default-layout">
        <slot name="header">
            <Header />
        </slot>
        <div class="default-layout__container">
            <slot />
        </div>
    </section>
</template>

<script lang="ts">
export default {
    created() {
        console.log('layout created')
    }
}
</script>

<style lang="scss">
.default-layout {
    background-color: var(--backgroud-color);
    color: white;

    &__container {
        max-width: 1320px;
        margin: auto;
    }
}
</style>