import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";

const Projekte = () => {
  const contactRef = useNav("Projects");
  return (
    <section ref={contactRef} id="contactItContainer">
      <img
        src="https://source.unsplash.com/random/600x600/?nature,water"
        alt="unsplash-img"
      />
      <div>
        <h3>Projekt(e)</h3>
        <p>Aktuell möchte ich vorstellen wie meine Homepage aufgebaut ist: </p>
        <ul>
          <li>Next.js</li>
          <li>Next.js</li>
        </ul>
      </div>
    </section>
  );
};

export default Projekte;
