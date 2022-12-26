import React from "react";
import LoginStore from "./loginStore";
import RegisterStore from "./registerStore";
class RootStore {
  constructor() {
    this.registerStore = new RegisterStore();
    this.loginStore = new LoginStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore };
