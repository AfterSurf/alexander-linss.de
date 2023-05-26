import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./References.css";

const References = () => {
  const referencesRec = useNav("References");

  return (
    <section ref={referencesRec} id="ReferencesItContainer">
      <div>
        <h3>LinkedinProfile</h3>
        <p>GitHub:</p>
        <a
          target="_blank"
          href="https://github.com/AfterSurf/alexander-linss.de"
        >
          LINK
        </a>
      </div>
    </section>
  );
};

export default References;
