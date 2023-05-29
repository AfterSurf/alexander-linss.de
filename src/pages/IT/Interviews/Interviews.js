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
            title="Aufgabe 1"
            description="Das ist die erste Aufgabe"
            img={imgLink}
          />
          <Aufgabe
            title="Aufgabe 2"
            description="Das ist die zweite Aufgabe"
            img={imgLink}
          />
          <Aufgabe
            title="Aufgabe 3"
            description="Das ist die dritte Aufgabe"
            img={imgLink}
          />
        </div>
      </div>
    </section>
  );
};

export default Interviews;
