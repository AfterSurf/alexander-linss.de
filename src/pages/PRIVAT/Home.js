import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./privatStyles.css";

const Home = () => {
  const homeRef = useNav("HomePrivat");
  return (
    <section ref={homeRef} id="homePrivatContainer">
      <div className="homePrivatText">
        <h2>HOME</h2>
        <h3>HOME</h3>
        <p>Hier bist du zu hause</p>
        <p>Hier bist du zu hause</p>
        <p>Hier bist du zu hause</p>
        <p>Hier bist du zu hause</p>
      </div>
    </section>
  );
};

export default Home;
