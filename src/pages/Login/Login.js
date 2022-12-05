import React, { useState } from "react";
import "./login.css";
import loginImg from "../../assets/img/login-pic.svg";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
function Login() {
  const [user, setUser] = useState({
    id: -1,
    name: "Jon",
    password: "123456",
  });
  const { loginStore } = useStore();
  const onFormUpdate = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, password } = user;
    try {
      //调用登录方法
      await loginStore.login({ name, password });
      //判断用户是否存在，若用户不存在提示用户进行注册
    } catch (e) {
      alert("登录失败");
    }

    //登录完成后，设置表单为空
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
            value={user.name}
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
            value={user.password}
            onChange={(e) => {
              onFormUpdate("password", e.target.value);
            }}
          />
        </label>
        <label>
          <input type="checkbox" />
          记住我
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

export default Login;
