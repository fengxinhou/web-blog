import { makeAutoObservable } from "mobx";
import { getToken, http, setToken } from "../utils";

const URL = "/login";
class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  getToken = async ({ name, password }) => {
    const res = await http.post(URL, { name, password });
    this.token = res.JWT;
    setToken(this.token);
  };
}

export default LoginStore;
