import React from "react";
import "./About.css";
import aboutPic from "./home-bg.jpg";

function about() {
  return (
  
      <div id="about">
        <div class="about container">
          <div class="col-left">
            <div class="about-img">
              <img src={aboutPic} alt="img" />
            </div>
          </div>
          <div class="col-right">
            <h1 class="section-title">
              About <span>us</span>
            </h1>
            <h2>Bridge of Hope Association</h2>
            <p>
              Bridge of Hope Association. born on December 18,2020. Fifteen
              members gathered in the city of Bujumbura to share our vision ,try
              to think about hopeless family, how we could respond to the
              children facing homeless and try to bring back hope to the
              homeless family.When God created a Human being, he also sent his
              beloved son Jesus Christ,to tell his people that we have a mission
              to accomplish in this world by responding God's wishes.our
              inspiration comes from the book of luke4:18,Matthew25:35 and
              John10:10.our motto is <b> _it's morning again</b> Bridge of Hope
              Association is here to stay.we convince people'faith to end up
              family homeless in the community, helping widows, serving children
              and single mothers...we give values to our partners and
              supporters.
            </p>
            <a href="contact.html" class="cta">
              Ask a question ?
            </a>
          </div>
        </div>
      </div>
  
  );
}

export default about;
