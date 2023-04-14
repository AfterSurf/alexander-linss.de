import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";

const Projekte = () => {
  const contactRef = useNav("ContactIt");
  return (
    <section ref={contactRef} id="contactItContainer">
      <img
        src="https://source.unsplash.com/random/600x600/?nature,water"
        alt="unsplash-img"
      />
      <div>
        <h3>Projekte</h3>
        <p>GitHub</p>
        <p>Projekte</p>
        <p>Licht zB</p>
      </div>
    </section>
  );
};

export default Projekte;
