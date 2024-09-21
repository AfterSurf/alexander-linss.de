import React from "react";
import { useNav } from "../../customHooks/useNav";

import styles from "./itStyles.module.css"
// import "./../Page.css"; // needed?! 
import imageProducts from "../../pictures/products.jpg";
import imageWebsite from "../../pictures/laptop.jpg";
import image from "../../pictures/heaven.jpg";
import Aufgabe from "./Interviews/Aufgabe";

const Projekte = () => {
  const projectsRef = useNav("Projects");

  return (
    <>
      <section ref={projectsRef} id="projectsItContainer">
        <img src={image} alt="unsplash-img" className={styles.projectImage} />
        <pre className={styles.projectText}>
          <div>
            <h3>Projekt(e)</h3>
            <div className={styles.aufgaben}>
              <Aufgabe
                title="Product Overview (react.js and graphQL)"
                description="Style uns verschiedene Produkte, zeige sie nach Kategorien (responsive) an und mach die Artikel likeable "
                img={imageProducts}
                link2project={"https://github.com/AfterSurf/SPARX"}
              />
              <Aufgabe
                title="www.alexander-linss.de"
                description="Hier das Repo zu dieser Website"
                img={imageWebsite}
                link2project={"https://github.com/AfterSurf/alexander-linss.de"}
              />
            </div>
          </div>
        </pre>
      </section>
    </>
  );
};

export default Projekte;
