import { makeAutoObservable } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/menu";
class MenuStore {
  menu = [];
  constructor() {
    makeAutoObservable(this);
  }
  getMenu = async () => {
    const res = await axios.get(URL);
    console.log("res.data", res.data);
    this.menu = res.data;
  };
}

export default MenuStore;
