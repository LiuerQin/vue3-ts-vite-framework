import { defineStore } from "pinia";

interface TabsItem {
  name: string;
  title: string;
  path: string;
}

interface LayoutStore {
  collapse: boolean;
  tabs: TabsItem[];
}

export const useLayoutStore = defineStore("layoutStore", {
  state: (): LayoutStore => ({
    collapse: false,
    tabs: [],
  }),
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
    addTab(data: TabsItem) {
      const hasTab =
        this.tabs.filter((item) => item.name === data.name).length > 0;
      hasTab || this.tabs.push(data);
    },
    removeTab(name: string) {
      this.tabs = this.tabs.filter((item) => item.name !== name);
    },
  },
  getters: {},
});
