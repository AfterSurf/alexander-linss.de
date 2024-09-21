import React from "react";
import { useNav } from "../../customHooks/useNav";
import styles from "./itStyles.module.css"

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer">
      <div>
        {textComponent}
        {profileComponent}
      </div>
    </section>
  );
};

const text = `Wie sieht die typische ITstory aus? 
und was macht so Spaß daran?`;

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
