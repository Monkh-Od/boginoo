import React, { useState } from "react";
import Logo from "../Icons/logo";
import Layout from "..//Components/layout";
import "../Styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== checkPassword) {
      alert("Please enter your password");
      return;
    }
    try {
      await axios.post("https://munkhod-boginoo-back.onrender.com/user/signup", {
        email,
        password,
      });
      setCheckPassword("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error(error);
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
      <p className="ptag">Бүртгүүлэх</p>
      <div className="box4">
        <div className="box1">
          <div className="pddng1">Цахим хаяг</div>
          <input
            type="email"
            placeholder="name@mail.domain"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="box2">
          <div className="pddng2">Нууц үг</div>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div className="box5">
          <div className="pddng3">Нууц үгээ давтна уу?</div>
          <input
            type="password"
            placeholder="password"
            value={checkPassword}
            onChange={(event) => setCheckPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="divdiv" onClick={handleSignUp}>
        <button className="burtguuleh">БҮРТГҮҮЛЭХ</button>
      </div>
      <div className="layoutt">
        <Layout />
      </div>
    </div>
  );
};

export default Signup;
