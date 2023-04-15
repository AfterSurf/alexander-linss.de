import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import image from "../../pictures/alex_bw.jpg";

const Contact = () => {
  const contactRef = useNav("ContactIT");
  return (
    <section ref={contactRef} id="contactContainerIt">
      <img src={image} alt="unsplash-img" />
      <div>
        <h3>CONTACT</h3>
        <p>This is the contact section</p>
      </div>
    </section>
  );
};

export default Contact;
