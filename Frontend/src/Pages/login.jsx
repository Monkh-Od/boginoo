import React, { useContext } from "react";
import Logo from "../Icons/logo";
import Layout from "..//Components/layout";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { Context } from "../Providers/Provider";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);
  const login = async () => {
    try {
      const res = await axios.post(
        "https://munkhod-boginoo-back.onrender.com/user/signin",
        {
          email: email,
          password: password,
        }
      );
      Cookie.set("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="Container">
      <div className="buuttoon">
        <button className="bttn">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</button>
      </div>
      <div className="loogoo">
        <Logo />
      </div>
      <p className="ptag">Нэвтрэх</p>
      <div className="box3">
        <div className="box1">
          <div className="pddng1">Цахим хаяг</div>
          <input
            placeholder="name@mail.domain"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box2">
          <div className="pddng2">Нууц үг</div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="baavrinbaavar">
        <div className="baavar">
          <input className="checkbox" type="checkbox"></input>
          <div className="namaigsana">Намайг сана</div>
        </div>
        <div className="nuutsug">Нууц үгээ мартсан</div>
      </div>
      <div className="divdiv">
        <button className="nevtreh" onClick={() => login()}>
          НЭВТРЭХ
        </button>
      </div>
      <div className="shinehereglegch" onClick={() => navigate("/SignUp")}>
        Шинэ хэрэглэгч бол энд дарна уу?
      </div>
      <div className="layoutt">
        <Layout />
      </div>
    </div>
  );
};

export default Login;
