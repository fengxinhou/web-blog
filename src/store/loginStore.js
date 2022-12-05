import { makeAutoObservable } from "mobx";
import axios from "axios";

const URL = "http://localhost:3000/user";
class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }
  login = () => axios.get(URL).then((res) => res.data);
}

export default LoginStore;
