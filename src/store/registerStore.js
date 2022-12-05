import { makeAutoObservable } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/user";
class RegisterStore {
  constructor() {
    makeAutoObservable(this);
  }
  register = async ({ name, password }) => {
    await axios.post(URL, { name, password });
  };
}

export default RegisterStore;
