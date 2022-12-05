import React from "react";
import RegisterStore from "./registerStore";
import LoginStore from "./loginStore";
import MenuStore from "./menuStore";

class RootStore {
  constructor() {
    this.registerStore = new RegisterStore();
    this.loginStore = new LoginStore();
    this.menuStore = new MenuStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore };
