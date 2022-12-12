import axios from "axios";
import { getToken } from "./token";
import { history } from "./history";
const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let data = {};
    if (error.message.indexOf("timeout") > -1) {
      data.message = "请求超时";
      return { data };
    }
    if (error.response.status === 401) {
      history.push("/login");
    }
    return Promise.reject(error.response.data.message);
  }
);

export { http };
