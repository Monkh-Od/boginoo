import React from "react";
import Header from "../Components/header";
import Logo from "../Icons/logo";
import Layout from "..//Components/layout";
import "../Styles/home-default.css";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../Providers/Provider";

const Home = () => {
  const { user } = useContext(Context);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const shorten = async () => {
    if (input) {
      const res = await axios.post("https://munkhod-boginoo-back.onrender.com/url/create", {
        original: input,
        ownerId: user?.email || null,
      });
      setData(res?.data.url);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Header />
      <div className="center">
        <div>
          <Logo />
        </div>
        <div className="boginoo">
          <input
            placeholder="https://www.web-huudas.mn"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button className="buttn" onClick={() => shorten()}>
            БОГИНОСГОХ
          </button>
        </div>
        {data && (
          <div className="third">
            <div className="first">
              <label className="ugugdsun">Өгөгдсөн холбоос:</label>
              <div className="holboo">{data.original}</div>
            </div>
            <div className="second">
              <label className="ugugdsun">Богино холбоос:</label>
              <div className="avah">
                <a
                  className="holboo"
                  href={`http://localhost:3000/${data.short}`}
                >
                  {`http://localhost:3000/${data.short}`}
                </a>
                <div
                  className="huulah"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:3000/${data.short}`
                    );
                  }}
                >
                  Хуулж авах
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="divide2">
        <Layout />
      </div>
    </div>
  );
};

export default Home;
