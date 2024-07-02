import React from "react";

function CenterContainer() {
  return (
    <div id="emailCtr">
      <p id="h1">Unlimited movies, TV shows and more</p>
      <p id="h2">Watch anywhere. Cancel anytime.</p>
      <p id="h3">Ready to watch? Enter your email to create or restart your membership.</p>
      <div id='inputCtr'>
        <input type="email" placeholder="Email Address"/>
        <button id="getStarted">Get Started &gt;</button>
      </div>
    </div>
  );
}

export default CenterContainer;
