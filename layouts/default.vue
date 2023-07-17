<template>
    <section class="default-layout">
        <div class="default-layout__header">
            <div class="container">
                <header class="header">
                    <NuxtLink :to="localePath('/')" class="link header__logo">
                        <Logo />
                    </NuxtLink>

                    <NuxtLink :to="localePath('/projects')" class="link">{{ $t("header.projects") }}</NuxtLink>

                    <ThemeSwitch class="header__theme-switch"/>

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
    --header-height: 5rem;
    --footer-height: 2rem;

    background-color: var(--background);
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

    transition: background-color var(--main-transition);

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

    background-color: var(--header-background);
    border-radius: .5rem;
    padding: .75rem;

    transition: background-color var(--main-transition);
    
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