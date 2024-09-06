import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/alex_bw.jpg";

const Vita = () => {
  const contactRef = useNav("Vita");
  return (
    <section ref={contactRef} id="vitaContainerPrivat">
      <img className="vitaPic" src={image} alt="unsplash-img" />
      <pre>
        <div>
          <h3>Vita</h3>
          <p>This is the vita section</p>
        </div>
      </pre>
    </section>
  );
};

export default Vita;
