import { makeAutoObservable } from "mobx";
import axios from "axios";

class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }
  login = async ({ name, password }) => {
    await axios.post("", { name, password });
  };
}

export default LoginStore;
