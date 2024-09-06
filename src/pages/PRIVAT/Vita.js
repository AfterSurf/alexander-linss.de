import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/alex_bw.jpg";


// ### IDEE
// Das Bild könnte sich animiert "öffnen" --> wie ein vorhang der aufgezogen wird 

const Vita = () => {
  const contactRef = useNav("Vita");
  return (
    <section ref={contactRef} id="vitaContainerPrivat">
      <img className="vitaPic" src={image} alt="unsplash-img" />
      <pre>
        <div>
          <h3>Vita</h3>
          <p>Bachelor of Arts</p>
          <p>Bachelor of Science</p>
          <p>Master of Science</p>
          <p>Webdeveloper</p>
          <p>Frontenddeveloper</p>
          <br></br>
          <h4>Eager To Learn</h4>
        </div>
      </pre>
    </section>
  );
};

export default Vita;
