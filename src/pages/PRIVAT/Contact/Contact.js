import React from "react";
import { useNav } from "../../../customHooks/useNav";

import "./../../Page.css";

import Form from "./Form.js";

const Contact = () => {
  const contactRef = useNav("Contact");
  return (
    <section ref={contactRef} id="contactContainerPrivat">
      <img
        src="https://source.unsplash.com/random/600x600/?nature,water"
        alt="unsplash-img"
      />
      <div>
        <h3>CONTACT</h3>
        <p>This is the contact section</p>

        <Form/>
        
      </div>
    </section>
  );
};

export default Contact;
