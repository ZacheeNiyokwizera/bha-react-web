import React from "react";
import homePic from "./home.jpg";

function Home() {
  return (

    <section id="hero">
        <header class="new-header">
            <div class="img-wrapper">
                <img src={homePic} />
            </div>
            <div class="banner">
                <h1>BHA</h1>
                <h1>Bridge of Hope Association</h1>
                <p>It's morning again</p>

                <a href="about.html" class="cta">Discover</a>
            </div>
        </header>
    </section>
  );
}

export default Home;
