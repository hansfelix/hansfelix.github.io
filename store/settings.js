const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

export const state = () => ({
    isDarkMode: isDarkMode
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}