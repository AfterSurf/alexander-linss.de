import React from "react";
import { useNav } from "../../../customHooks/useNav";

// test
// import "./../../Page.css";

import "./Contact.css"
import Form from "./Form.js";


const Contact = () => {
  const contactRef = useNav("Contact");
  return (
    <section ref={contactRef} id="contactContainerPrivat">
      <div className="main-grid main-template">
        <h3 className="page-title">CONTACT</h3>
        <div className="secondary-text">
                    <h2 className="section-title">This is the contact section</h2>
                    <p>melden Sie sich bei mir</p>
        </div>
        <Form/>
        
      </div>
    </section>
  );
};

export default Contact;
