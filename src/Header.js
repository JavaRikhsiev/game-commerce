import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./images/logo/logo1.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>

      <div className="header_search">
        <input className="header_searchInput put" type="text" />
        {/*Logo*/}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Gaming</span>
        <span className="header_optionLineTwo">News</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
        <span className="header_optionLineTwo">& Orders</span>
      </div>

      <Link to="/Checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_BasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
