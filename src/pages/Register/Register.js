import React, { useState } from "react";
import registerImg from "../../assets/img/login-pic.svg";
import "./register.css";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
function Register() {
  const [user, setUser] = useState({
    id: -1,
    name: "",
    password: "",
  });
  const { registerStore } = useStore();
  const navigate = useNavigate();
  const onFormUpdate = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, password } = user;
    try {
      await registerStore.register({ name, password });
      alert("注册成功！");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="register">
      <img src={registerImg} alt="register" />
      <h1>博客园</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
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

        <div className="registerButton">
          <button type="submit">确定</button>
        </div>
      </form>
    </div>
  );
}

export default observer(Register);
