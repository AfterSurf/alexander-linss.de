import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./itStyles.css";

const Home = () => {
  const homeRef = useNav("HomeIt");
  return (
    <section ref={homeRef} id="homeItContainer">
      <div className="homeItText">
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
