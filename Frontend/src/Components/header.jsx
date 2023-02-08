import React from "react";
import "../Styles/header.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Providers/Provider";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import IconDown from "../Icons/icon-down"

export const Header = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOut = () => {
    setUser(null);
    Cookies.remove("token");
    handleClose();
  };
  return (
    <div className="Kantainer">
      <div className="jungo">
        <button className="bttn">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</button>
        {user ? (
          <div className="nernerner" onClick={handleClick}>
            {user?.email}
            <IconDown />
          </div>
        ) : (
          <p className="button" onClick={() => navigate("/Login")}>
            НЭВТРЭХ
          </p>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Түүх</MenuItem>
          <MenuItem onClick={logOut}>Гарах</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
