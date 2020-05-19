const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const state = () => ({
    isDarkMode: isDarkMode
})

export const getters = {
    isDarkMode(state) {
        return state.isDarkMode;
    },
}

export const mutations = {
    toogleIsDarkMode(state) {
        state.isDarkMode = !state.isDarkMode
    },
}