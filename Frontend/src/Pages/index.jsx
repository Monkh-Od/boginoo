import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home-default";
import Login from "./login";
import Signup from "./signup";
import GoURL from "./GoURL";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/history" element={<Signup />} />
        <Route path="/:shortId" element={<GoURL />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
