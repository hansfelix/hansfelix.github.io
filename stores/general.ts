import { useStorage } from "@vueuse/core";

type State = {
  colorMode: string;
};

export const useGeneral = defineStore("general", {
  state: ():State => ({
    colorMode: getSettings(), //useStorage("nuxt-color-mode", "light", localStorage).value,
  }),

  actions: {
    updateSettings(colorMode: string) {
      this.colorMode = colorMode;
    },
  },
});

const getSettings = (): string => {
  return localStorage.getItem("nuxt-color-mode")?.toString();
}