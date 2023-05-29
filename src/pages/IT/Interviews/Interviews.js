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
          Folgende Aufgaben durfte ich im Laufe meiner "Karriere"
          entgegennehmen..
        </p>
        <p></p>
        <div className="aufgaben">
          <Aufgabe
            title="Slider (ida - mdr)"
            description="Bitte bau uns einen Slider, der Bilder slidet (animiert)."
            img={imgLink}
          />
          <Aufgabe
            title="Rechteverwaltung-anzeige (Raylytic)"
            description="Bau eine Anwendung, die view-rechte für verschiedene Nutzer einschränken kann"
            img={imgLink}
          />
          <Aufgabe
            title="Aufgabe 3"
            description="Style uns verschiedene Produkte, zeige sie nach Kategorien (responsive) an und mach die Artikel likeable "
            img={imgLink}
          />
        </div>
      </div>
    </section>
  );
};

export default Interviews;
