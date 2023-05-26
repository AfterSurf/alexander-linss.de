import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./References.css";

const References = () => {
  const referencesRec = useNav("References");

  return (
    <section ref={referencesRec} id="ReferencesItContainer">
      <div>
        <h3>LinkedinProfile</h3>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
        >
          LINKedin
        </a>
        <p>GitHub:</p>
        <a
          target="_blank"
          href="https://github.com/AfterSurf/alexander-linss.de"
        >
          LINKedHub
        </a>
      </div>
    </section>
  );
};

export default References;
