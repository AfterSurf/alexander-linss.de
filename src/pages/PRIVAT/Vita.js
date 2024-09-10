import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/alex_bw.jpg";


const Vita = () => {
  const contactRef = useNav("Vita");
  return (
    <section ref={contactRef} id="vitaContainerPrivat">
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
      <img className="vitaPic" src={image} alt="unsplash-img" />
    </section>
  );
};

export default Vita;
