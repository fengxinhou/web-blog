import { makeAutoObservable, runInAction } from "mobx";
import { http, setToken } from "../utils";

const URL = "/register";
class RegisterStore {
  token = "";
  constructor() {
    makeAutoObservable(this);
  }
  register = async ({ name, password }) => {
    const res = await http.post(URL, { name, password });
    runInAction(() => {
      this.token = res.JWT;
    });
    setToken(this.token);
  };
}

export default RegisterStore;
