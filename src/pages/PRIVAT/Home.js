import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./privatStyles.css";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    // id richtig benamen homePrivatContainer
    <section ref={homeRef} id="homeContainerPrivat">
      <pre>
        <div className="homePrivatText">
          <h3>Alexander Linß</h3>

          <div>
          <h4 className="aboutText">"Learn the rules like a pro,</h4>
          <h4 className="aboutText">so you can break them like an artist."</h4>
          <h4 className="aboutTextAutor">- P. Picasso</h4>
        </div>

          <p>Gesagt, getan.</p>
          <br></br>
          <p>Das Coden gibt Freiheiten, gleichzeitig zu Recht etablierte Standards und best practices.</p>
          <p>
            Es gibt einem die Möglichkeit etwas zu erschaffen. 
          </p>
          <br></br>
          <p>
            Frontend bedeutet für mich Technik + Design. 
          </p>
        </div>
      </pre>
      {/* styles from page.css */}

    </section>
  );
};

export default Home;
