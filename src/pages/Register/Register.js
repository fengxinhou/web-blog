import React, { useState } from "react";
import "./register.css";
import bgImg from "../../assets/img/bg.webp";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
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
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="register">
      <img src={bgImg} alt="bgImg" />
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>
          用&nbsp;户&nbsp;名&nbsp;&nbsp;：&nbsp;
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
          密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;：&nbsp;&nbsp;
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
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  );
}

export default observer(Register);
