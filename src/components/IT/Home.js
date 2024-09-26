import React from "react";
import { useNav } from "../../customHooks/useNav";
import styles from "./itStyles.module.css"

import Points from "./Points/Points";
import Why from "./Points/Why";
import FavTech from "./Points/FavTech";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer">
      <div>
        {textComponent}
        <div className={styles.PointsContainer}>
          <Points title="Warum diese Seite" Component={<Why/>}/>
          <Points title="Lieblingstechnologien" Component={<FavTech/>}/>
        </div>
        {profileComponent}
      </div>
    </section>
  );
};

const text = `Herzlich Willkomen auf dem technischen Teil der Website.`;

const textComponent = (
  <>
    <pre className={styles.frontText}>
      <h3>{text}</h3>
    </pre>
  </>
);

const profileComponent = (
  <>
    <div>
      <pre>
      <h3>Profile:</h3>
      <div className={styles.socialmedia}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
        >
          Linked:in
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AfterSurf/"
        >
          Git:Hub
        </a>
      </div>
      </pre>
    </div>
  </>
);

export default Home;
