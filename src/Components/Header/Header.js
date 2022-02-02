import React from "react";
import "./Header.scss";

import { LOGO__LINK } from "../../Helpers/config";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={LOGO__LINK} alt="Logo" className="header__logo" />
        <button className="header__link">Categories</button>
      </div>
      <div className="header__search-box">
        <SearchOutlinedIcon fontSize="large" className="header__search-icon" />
        <input
          type="text"
          className="header__input"
          placeholder="Search for Anything"
        />
      </div>
      <div className="header__nav">
        <ShoppingCartOutlinedIcon fontSize="large" />
        <button className="header__btn header__btn--unfilled"> Log in </button>
        <button className="header__btn header__btn--filled"> SignUp </button>
        <button className="header__btn header__btn--unfilled  lang-btn">
          <LanguageIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
