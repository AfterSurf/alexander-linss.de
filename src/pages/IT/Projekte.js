import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/heaven.jpg";

const Projekte = () => {
  const projectsRef = useNav("Projects");

  return (
    <>
      <section ref={projectsRef} id="projectsItContainer">

        <img src={image} alt="unsplash-img" />
        <pre>
          <div>
            <h3>Projekt(e)</h3>
            <p>
              Aktuell möchte ich vorstellen wie meine Homepage aufgebaut ist:{" "}
            </p>
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
        </pre>

      </section>
    </>
  );
};

export default Projekte;
