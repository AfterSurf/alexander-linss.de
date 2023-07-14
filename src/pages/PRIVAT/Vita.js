import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/alex_bw.jpg";

const Vita = () => {
  const contactRef = useNav("Vita");
  return (
    <section ref={contactRef} id="vitaContainerPrivat">
      <img src={image} alt="unsplash-img" />
      <div>
        <h3>Vita</h3>
        <p>This is the contact section</p>
      </div>
    </section>
  );
};

export default Vita;
