import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/img/bg.webp";
import "./login.css";
function Login() {
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
    password: "",
  });
  const onFormUpdate = (key, value) => {
    setNewUser({
      ...newUser,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="login">
      <img src={bgImg} alt="bgImg" />
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

export default Login;
