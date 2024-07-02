import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";
function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Netflix Logo" />
      <div id="btnRow">
        <div id="dropdown">
          <select>
            <option value={"eng"}>English</option>
            <option value={"hin"}>हिंदी</option>
          </select>
        </div>
        <button id="signinBtn">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
