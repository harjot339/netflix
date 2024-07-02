import React from "react";
import Header from "./atoms/Header";
import "./styles.css";
import CenterContainer from "./atoms/CenterContainer";
import Footer from "./atoms/Footer";

function LandingPage() {
  return (
    <div>
      <div id="background">
        <Header />
        <CenterContainer />
      </div>
      <div id="seperator"/>
      <Footer />
    </div>
  );
}

export default LandingPage;
