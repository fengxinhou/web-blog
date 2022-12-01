import React from "react";
import "./login.css";
import loginImg from "../../assets/img/login-pic.svg";
function Login() {
  return (
    <div className="login">
      <img src={loginImg} alt="login" />
      <h1>博客园</h1>
      <form className="loginForm">
        <label>
          用户名：
          <input type="text" placeholder="请输入用户名" />
        </label>
        <br />
        <label>
          密&nbsp;&nbsp;&nbsp;码：
          <input type="password" placeholder="请输入密码" />
        </label>
        <br />
        <label>
          <input type="checkbox" />
          <span>记住我</span>
        </label>
        <div className="loginButton">
          <button>注册</button>
          <button>登录</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
