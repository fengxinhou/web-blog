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
  const navigate = useNavigate();
  const onFormUpdate = (key, value) => {
    setNewUser({
      ...newUser,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = newUser;
    if (!name || !password) {
      alert("用户名或密码不为空");
    }
    try {
      await loginStore.getToken({ name, password });
      alert("登录成功！");
      navigate("/");
    } catch (error) {
      alert(error);
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
        <div className="go_register">
          <Link to={"/register"}>还没账号，去注册</Link>
        </div>
        <div className="loginButton">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  );
}

export default observer(Login);
