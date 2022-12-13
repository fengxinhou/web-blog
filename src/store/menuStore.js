import { makeAutoObservable, runInAction } from "mobx";
import { getToken } from "../utils";
class MenuStore {
  menuList = [];
  token = getToken();
  constructor() {
    makeAutoObservable(this);
  }
  getMenuList = async () => {
    const base64Url = this.token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    runInAction(() => {
      this.menuList = JSON.parse(jsonPayload).permission;
    });
    return this.menuList;
  };
}

export default MenuStore;
