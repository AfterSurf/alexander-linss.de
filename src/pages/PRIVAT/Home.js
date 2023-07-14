import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./privatStyles.css";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeContainerPrivat">
      <div className="homePrivatText">
        <h2>Alexander Linß</h2>
        <h3>Privat</h3>
        <p>Wer bist du?</p>
        <p>Was hast du bis jetzt alles gemacht?</p>
        <p>Wie denkst du über die Welt?</p>
      </div>
    </section>
  );
};

export default Home;
