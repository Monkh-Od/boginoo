import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const Context = createContext({
  user: null,
});

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  axios.interceptors.request.use(
    function (config) {
      // Huselt ilgeehes umnu ymr neg zuil hii
      const token = Cookies.get("token");
      if (token) {
        config.headers.set("token", token);
      }
      return config;
    },
    function (error) {
      // Huseltiin aldaatai ymr neg zuil hii
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const token = Cookies.get("token");

    const getUser = async () => {
      const res = await axios.get("https://munkhod-boginoo-back.onrender.com/user");
      setUser(res.data);
    };

    if (token) {
      getUser();
    }
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
