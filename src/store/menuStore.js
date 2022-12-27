import { makeAutoObservable, runInAction } from "mobx";
import { getToken } from "../utils";

class MenuStore {
  menuList = [];
  userInfoName = "";
  token = getToken();
  constructor() {
    makeAutoObservable(this);
  }
  parseToken() {
    const base64Url = this.token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }
  // jsonPayload = this.parseToken();
  blogMenu = JSON.parse(this.parseToken());
  getMenuList = () => {
    runInAction(() => {
      this.menuList = this.blogMenu.permission;
    });
    return this.menuList;
  };

  getUserInfo = () => {
    runInAction(() => {
      this.userInfoName = this.blogMenu.name;
      console.log(this.userInfoName);
    });
    return this.userInfoName;
  };
}

export default MenuStore;
