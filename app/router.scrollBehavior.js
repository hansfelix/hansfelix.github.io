import { getMatchedComponents } from './utils'

function shouldScrollToTop (route) {
    const Pages = getMatchedComponents(route)
    if (Pages.length === 1) {
        const { options = {} } = Pages[0]
        return options.scrollToTop !== false
    }
    return Pages.some(({ options }) => options && options.scrollToTop)
}

const scrollBehavior = async (to, from, savedPosition) => {
    // If the returned position is falsy or an empty object, will retain current scroll position
    let position = false
    const isRouteChanged = to !== from

    console.log(to, from, savedPosition)
    if (savedPosition) {
        position = savedPosition
    } else if (isRouteChanged && shouldScrollToTop(to)) {
        position = { x: 0, y: 0 }
    }
    const nuxt = window.$nuxt;

    if (
        // Initial load (vuejs/vue-router#3199)
        !isRouteChanged ||
        // Route hash changes
        (to.path === from.path && to.hash !== from.hash)
    ) {
        nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
    }


    return new Promise((resolve) => {
        // wait for the out transition to complete (if necessary)
        nuxt.$once('triggerScroll', () => {
            // coords will be used if no selector is provided,
            // or if the selector didn't match any element.
            if (to.hash) {
                let hash = to.hash
                // CSS.escape() is not supported with IE and Edge.
                if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
                    hash = '#' + window.CSS.escape(hash.substr(1))
                }
                try {
                    const el = document.querySelector(hash)
                    if (el) {
                        // scroll to anchor by returning the selector
                        position = { y: el.offsetTop }
                        position.behavior = 'smooth'

                        if (to.params.retainPosition) {
                            const doc = document.documentElement;
                            position.y = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                        }
                        // Respect any scroll-margin-top set in CSS when scrolling to anchor
                        const y = Number(getComputedStyle(el)['scroll-margin-top']?.replace('px', ''))
                        if (y) {
                            position.offset = { y }
                        }
                    }
                } catch (e) {
                    console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
                }
            }
            resolve(position)
        })
    })
}
export default scrollBehavior;