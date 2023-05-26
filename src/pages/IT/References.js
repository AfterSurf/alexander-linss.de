import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../References.css";

const References = () => {
  const referencesRec = useNav("References");

  return (
    <section ref={referencesRec} id="">
      <div>
        <h3>LinkedinProfile</h3>
        <p>GitHub</p>
      </div>
    </section>
  );
};
