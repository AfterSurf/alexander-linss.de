import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";

const Interviews = () => {
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
      </div>
    </section>
  );
};

export default Interviews;
