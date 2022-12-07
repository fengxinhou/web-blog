import React from "react";
import RegisterStore from "./registerStore";
import LoginStore from "./loginStore";
import MenuStore from "./menuStore";
import ArticleStore from "./articleStore";

class RootStore {
  constructor() {
    this.registerStore = new RegisterStore();
    this.loginStore = new LoginStore();
    this.menuStore = new MenuStore();
    this.articleStore = new ArticleStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore };
