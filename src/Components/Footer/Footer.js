import React from "react";
import "./Footer.scss";
import { FOOTER__LOGO } from "../../Helpers/config";

function Footer() {
  return (
    <div className="footer">
      <img src={FOOTER__LOGO} alt="Footer__logo" className="footer__logo" />
      <p className="footer__credit">© 2022 Udemy Clone, Inc.</p>
    </div>
  );
}

export default Footer;
