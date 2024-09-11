import React from "react";
import { useNav } from "../../customHooks/useNav";

import "./../Page.css";
import imageProducts from "../../pictures/products.jpg";
import imageWebsite from "../../pictures/laptop.jpg";
import image from "../../pictures/heaven.jpg";
import Aufgabe from "./Interviews/Aufgabe";

const Projekte = () => {
  const projectsRef = useNav("Projects");
  const imgLink =
    "https://www.tortoisetown.com/wp-content/uploads/2017/12/red-ear-slider-for-sale-1.jpg";
  return (
    <>
      <section ref={projectsRef} id="projectsItContainer">
        <img src={image} alt="unsplash-img" className="projectImage" />
        <pre className="projectText">
          <div>
            <h3>Projekt(e)</h3>
            <div className="aufgaben">
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
