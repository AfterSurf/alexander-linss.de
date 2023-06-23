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
        <h3>Studien</h3>
        <p>Diese Seite soll auch ein Ort für Studien sein. </p>
        <p>
          Hier aktuell Technologien, die mich interessieren und die ich
          vertiefend studieren möchte:
        </p>
        <ul>
          <li>Webpack und andere Buildtools</li>
          <li>Next.js</li>
        </ul>
      </div>
    </section>
  );
};

export default Projekte;
