<template>
    <section class="default-layout">
        <slot name="header">
            Default slot content for <code>Custom</code> layout
        </slot>
        <slot />
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
    max-width: 1320px;
    margin: auto;
}
</style>