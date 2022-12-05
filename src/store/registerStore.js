import { makeAutoObservable } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/user";
class RegisterStore {
  constructor() {
    makeAutoObservable(this);
  }
  register = async ({ name, password }) => {
    console.log("注册逻辑");
    const res = await axios.post(URL, { name, password });
    console.log("login request", res.data);
  };
}

export default RegisterStore;
