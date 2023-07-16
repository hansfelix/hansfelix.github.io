<template>
    <section class="default-layout">
        <div class="default-layout__header">
            <div class="container">
                <header class="header">
                    <NuxtLink to="/" class="link header__logo">
                        <Logo />
                    </NuxtLink>

                    <NuxtLink to="/projects" class="link">Projects</NuxtLink>

                    <div class="header__theme-switch">
                        D
                    </div>
                    <LangDropdown />
                </header>
            </div>
        </div>

        <main>
            <slot />
        </main>

        <footer class="default-layout__footer">
            Made with ❤️ in Perú
        </footer>
    </section>
</template>

<style lang="scss">
.default-layout {
    --background: #fff;
    --header-height: 5rem;
    --footer-height: 2rem;

    &.is-dark {
        --background: #4a4d54;
    }

    background-color: var(--background);
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

    &__header {
        height: var(--header-height);

        display: flex;
        align-items: center;
    }

    &__footer {
        height: var(--footer-height);

        display: grid;
        place-content: center;
    }
}

.header {
    display: flex;
    align-items: center;

    background-color: #e9ece9;
    border-radius: .5rem;
    padding: .75rem;

    &__logo {
        margin-right: .75rem;
        line-height: 0;
    }

    &__theme-switch {
        margin-right: .75rem;
        margin-left: auto;
    }
}
</style>