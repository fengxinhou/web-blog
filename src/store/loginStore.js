import { makeAutoObservable, runInAction } from "mobx";
import { getToken, http, setToken } from "../utils";

const URL = "/login";
class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  getToken = async ({ name, password }) => {
    const res = await http.post(URL, { name, password });
    runInAction(() => {
      this.token = res.JWT;
    });
    setToken(this.token);
  };
}

export default LoginStore;
