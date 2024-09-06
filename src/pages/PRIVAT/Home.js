import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./privatStyles.css";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeContainerPrivat">
      <pre>
        <div className="homePrivatText">
          <h2>Alexander Linß</h2>
          <p>Das hier ist mein privater Abschnitt</p>
          <p>Ich werde kurz mein Vita abbilden</p>
          <p>
            Außerdem gibt es hier die Möglichkeit mit mir in Kontakt zu treten?
          </p>
        </div>
      </pre>
    </section>
  );
};

export default Home;
