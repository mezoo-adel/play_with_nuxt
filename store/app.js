export const useAppStore = defineStore("app", {
  state: {
    welcome_msg: "hi, User!",
  },
  actions: {
    welcome() {
      console.log("welcom from $c Pinia Store", "color:yellow");
      console.log(this.welcome_msg);
    },
  },
});
