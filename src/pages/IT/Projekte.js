// import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import Image from 'next/image';



const Projekte = () => {
  const contactRef = useNav("Projects");







  return (
    <>
    <section ref={contactRef} id="contactItContainer">
      {/* Hier checken wir man das Image einbindet */}
    <Image src={'swv_logo.png'} width={150} height={150} />
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
    </>
  );
};

export default Projekte;
