import React from "react";
import { useNav } from "../../customHooks/useNav.js";

import styles from "./Contact.module.css"
import Form from "./Form.js";



const Contact = () => {
  const contactRef = useNav("Contact");
  return (
    <section ref={contactRef} id="contactContainerPrivat">
      <div className={`${styles.main_grid} ${styles.main_template}`}>
        <h3 className={styles.page_title}>CONTACT</h3>
        <div className={styles.secondary_text}>
          <h2 className={styles.section_title}>This is the contact section</h2>
          <p>melden Sie sich bei mir</p>
        </div>
        <Form/>
      </div>
    </section>
  );
};

export default Contact;
