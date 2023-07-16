<template>
    <div class="dropdown-lang" :class="cssClass" ref="modalRef">
        <div class="dropdown-lang__trigger" @click="isDropdownActive = !isDropdownActive">
            <div class="dropdown-lang__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                </svg>
            </div>
            <span>{{ $i18n.locale }}</span>
        </div>

        <!-- DROPDOWN MENU -->
        <div class="dropdown-lang__menu" v-if="isDropdownActive">
            <NuxtLink class="dropdown-lang__menu-item" :to="switchLocalePath('en')">EN - English</NuxtLink>
            <NuxtLink class="dropdown-lang__menu-item" :to="switchLocalePath('es')">ES - Español</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const modalRef = ref(null);
const isDropdownActive = ref(false);

// Close dropdown menu on click outside
onClickOutside(modalRef, (event) => {
  isDropdownActive.value = false;
});

// Css class calc
const cssClass = computed(() => {
  return {
    "is-active": isDropdownActive.value,
  };
});
</script>

<style lang="scss">
.dropdown-lang {
    --icon-fill: var(--text-color);

    position: relative;

    &__trigger {
        display: flex;
        align-items: center;

        text-transform: uppercase;
        cursor: pointer;
    }

    &__icon {
        fill: var(--icon-fill);
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    &__menu {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        background: white;
        white-space: nowrap;
        border-radius: 4px;
        z-index: 100;
    }

    &__menu-item {
        display: block;
        text-decoration: none;
        padding: 10px 15px;

        &:first-child {
            border-bottom: 1px solid #9494944d;
        }
    }
}
</style>
