import React, { useState } from "react";
import "./login.css";
import loginImg from "../../assets/img/login-pic.svg";
import { useStore } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
function Login() {
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
    password: "",
  });
  const { loginStore } = useStore();
  const navigator = useNavigate();
  const onFormUpdate = (key, value) => {
    setNewUser({
      ...newUser,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.password) {
      alert("用户名或密码不为空");
    }

    if (newUser.name && newUser.password) {
      const res = await loginStore.login();
      const data = res.find((item) => {
        return item.name === newUser.name;
      });
      if (data === undefined) {
        alert("用户不存在，请先进行注册");
        setNewUser({ id: 0, name: "", password: "" });
      } else {
        if (data.name === newUser.name && data.password === newUser.password) {
          navigator("/");
        } else {
          alert("用户名或密码错误");
        }
      }
    }
  };
  return (
    <div className="login">
      <img src={loginImg} alt="login" />
      <h1>博客园</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          用户名：
          <input
            type="text"
            placeholder="请输入用户名"
            value={newUser.name}
            onChange={(e) => {
              onFormUpdate("name", e.target.value);
            }}
          />
        </label>
        <label>
          密&nbsp;&nbsp;&nbsp;码：
          <input
            type="password"
            placeholder="请输入密码"
            value={newUser.password}
            onChange={(e) => {
              onFormUpdate("password", e.target.value);
            }}
          />
        </label>
        <div className="loginButton">
          <button>
            <Link to={"/register"}>注册</Link>
          </button>
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  );
}

export default observer(Login);
