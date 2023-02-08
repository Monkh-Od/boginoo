import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/gourl.css"

export const GoURL = () => {
  const { shortId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getUrl = async () => {
      if (!shortId) return;
      try {
        const res = await axios.get(`https://munkhod-boginoo-back.onrender.com/url/${shortId}`);
        window.location.href = res.data.url.original;
      } catch {
        navigate("/");
      }
    };
    getUrl();
  }, []);
  return <div className="gourl">Loading...</div>;
};
export default GoURL;
