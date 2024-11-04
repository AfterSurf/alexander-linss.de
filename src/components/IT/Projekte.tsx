import { useNav } from "../../customHooks/useNav";

import style from "./Projekte.module.scss"
import imageProducts from "../../pictures/products.jpg";
import imageWebsite from "../../pictures/laptop.jpg";
import Aufgabe from "../interviews/Aufgabe";

const Projekte = () => {
  const projectsRef = useNav("Projects");

  return (
    <>
      <section ref={projectsRef} id="projectsItContainer">
        <pre className={style.projectText}>
          <div>
            <h3>Projekte</h3>
            <div className={style.aufgaben}>
              <Aufgabe
                title="Phone Magic"
                description="Liste aus Telefonnummern, mit Suchfeld, responsive und GraphQL-Backend."
                img={imageProducts}
                link2project={"https://github.com/AfterSurf/SPARX/tree/main"}
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
