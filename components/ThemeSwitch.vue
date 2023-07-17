<template>
    <section class="switch-dark-mode" :class="cssClass">
        <div class="switch-dark-mode__icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                    <path
                        d="M16.01,13.98c-3.309,0-5.99-2.681-5.99-5.99c0-2.711,1.813-4.974,4.283-5.714C13.563,2.102,12.794,2,12,2
	C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.478,10-10c0-0.794-0.103-1.563-0.278-2.302C20.984,12.167,18.72,13.98,16.01,13.98z" />
                </g>
            </svg>
        </div>

        <div class="switch-dark-mode__control" @click="$colorMode.preference = isDarkTheme()? 'light': 'dark'">
            <div class="switch-dark-mode__circle" type="checkbox"></div>
            <div class="switch-dark-mode__bar" type="checkbox"></div>
        </div>
    </section>
</template>
  
<script setup>
  const colorMode = useColorMode();
  
  function isDarkTheme() {
      return colorMode.value === 'dark';
  }

  // Css class calc
  const cssClass = computed(() => {
    return {
      "switch-dark-mode--active": isDarkTheme(),
    };
  });
  </script>
  
<style lang="scss">
.switch-dark-mode {
    $self: &;
    position: relative;

    display: flex;
    align-items: center;

    &__icon {
        fill: currentColor;
        width: 1.1rem;
        height: 1.1rem;
    }

    &__control {
        position: relative;
        cursor: pointer;
    }

    &__circle {
        position: absolute;
        top: 2px;
        right: 16px;
        border-radius: 50%;
        width: 1.1rem;
        height: 1.1rem;
        background-color: white;
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.2);
        transition: background-color 0.2s, transform 0.2s;
    }

    &__bar {
        display: inline-block;
        margin: 5px 0 5px 10px;
        border-radius: 7px;
        width: 2rem;
        height: 0.75rem;
        background-color: #9494944d;
        vertical-align: top;
        transition: background-color 0.2s, opacity 0.2s;
    }

    // Modifiers
    &--active {
        #{$self}__circle {
            // background-color: $main-color;
            transform: translateX(16px);
        }
    }
}
</style>
  
