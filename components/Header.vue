<template>
    <section class="header">
        <div class="header__container">
            <div class="header__logo">
                <Logo />
            </div>
            <div class="header__links"></div>

            <!-- Button Actions -->
            <div class="header__actions">
                <!-- Switch to dark mode  -->
                <div class="header__dark_mode">
                    <section class="switch-dark-mode">
                        <div class="switch-dark-mode__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z">
                                </path>
                            </svg>
                        </div>
                    </section>
                </div>

                <!-- Switch language -->
                <div class="header__language">
                    <div class="dropdown-language">
                        <div class="dropdown-language__selector">
                            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                stroke="currentColor" viewBox="0 0 24 24" class="icon is-strocke">
                                <path
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129">
                                </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true" class="icon">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.header {
    height: 100px;

    &__container{
        display: grid;
        grid-template-columns: auto 1fr auto;
    }
}
</style>