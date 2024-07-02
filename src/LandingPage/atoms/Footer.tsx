import React from "react";
import "./styles.css";
function Footer() {
  return (
    <div id="footer">
      <text>
        Questions? Call <a href=".">000-800-919-1694</a>
      </text>
      <div id="links">
        {[
          "FAQ",
          "Help Centre",
          "Account",
          "Media Centre",
          "Investor Relations",
          "Jobs",
          "Ways to Watch",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate Information",
          "Contact Us",
          "Speed Test",
          "Legal Notices",
          "Only on Netflix",
        ].map((item) => (
          <a key={item} href=".">
            {item}
          </a>
        ))}
      </div>
      <div id="dropdown">
        <select>
          <option value={"eng"}>English</option>
          <option value={"hin"}>हिंदी</option>
        </select>
      </div>
      <br />
      <text>Netflix India</text>
    </div>
  );
}

export default Footer;
