import React from "react";
import RegisterStore from "./registerStore";
import LoginStore from "./loginStore";
import MenuStore from "./menuStore";
import ArticleStore from "./articleStore";
import BlogListStore from "./blogListStore";

class RootStore {
  constructor() {
    this.registerStore = new RegisterStore();
    this.loginStore = new LoginStore();
    this.menuStore = new MenuStore();
    this.articleStore = new ArticleStore();
    this.blogListStore = new BlogListStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export { useStore };
