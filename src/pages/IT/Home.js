import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./../Page.css";

const Home = () => {
  const homeRef = useNav("Home");
  console.log("home");
  return (
    <section ref={homeRef} id="homeContainer">
      <div className="homeText">
        <h3>IT</h3>
        <p>Hier wird alles zum Thema IT stehen</p>
        <p>...</p>
        <p>...</p>
        <p>Hier wird alles zum Thema IT stehen</p>
      </div>
    </section>
  );
};

export default Home;
