import React from "react";
import { useNav } from "../../../customHooks/useNav";

import Aufgabe from "./Aufgabe";
import "./Interviews.css";

const Interviews = () => {
  const imgLink =
    "https://www.tortoisetown.com/wp-content/uploads/2017/12/red-ear-slider-for-sale-1.jpg";
  const interviewsRef = useNav("Interviews");
  return (
    <section ref={interviewsRef} id="interviewsItContainer">
      <div>
        <h2>INTERVIEWS</h2>
        <p>
          Hier steht alles über die Interviewerfahrungen, die ich in den letzten
          Jahren machen durfte.
        </p>
        <p>
          Hier ein Referenzprojekt mit folgendem Techstack: 
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </p>
        <p></p>
        <div className="aufgaben">
          <Aufgabe
            title="Product Overview (react.js and graphQL)"
            description="Style uns verschiedene Produkte, zeige sie nach Kategorien (responsive) an und mach die Artikel likeable "
            img={imgLink}
            link2project={"https://github.com/AfterSurf/SPARX"}
          />
        </div>
      </div>
    </section>
  );
};

export default Interviews;
