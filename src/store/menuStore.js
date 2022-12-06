import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/menu";
class MenuStore {
  menu = [];
  constructor() {
    makeAutoObservable(this);
  }
  getMenu = async () => {
    const res = await axios.get(URL);
    runInAction(() => {
      this.menu = res.data;
    });
    return this.menu;
  };
}

export default MenuStore;
