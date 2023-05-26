import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./CollegeBlock.css";

const CollegeBlock = () => {
  const contactRef = useNav("CollegeBlock");
  return (
    <section ref={contactRef} id="CollegeBlockContainer">
      {/* <img
        src="https://source.unsplash.com/random/600x600/?nature,water"
        alt="unsplash-img"
      />
      <div>
        <h3>CONTACT</h3>
        <p>This is the contact section</p>
      </div> */}

      <div class="paper">
        <div class="holes"></div>
        <textarea placeholder="Some text goes here."></textarea>
      </div>
    </section>
  );
};

export default CollegeBlock;
