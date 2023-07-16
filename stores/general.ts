export const usegGeneral = defineStore('counter', {
    state: () => ({
      n: 2,
    }),
  
    getters: {
      double: (state) => state.n * 2,
    },
  
    actions: {
      increment(amount = 1) {
        this.incrementedTimes++
        this.n += amount
      },
    },
  })
  