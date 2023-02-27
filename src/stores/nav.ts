import { defineStore } from "pinia";
interface State {
  nav: String;
}

export const useNavStore = defineStore("nav", {
  state: (): State => ({
    nav: "Home",
  }),

  getters: {
    getActiveNav(state) {
      return state.nav;
    },
  },
  actions: {
    setNav(newNav: String) {
      this.nav = newNav;
    },
    slideToSection(top: number) {
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    },
  },
});
