import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./itStyles.css";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer" className="">
      <div className="homeItSplit">
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
    <pre className="FrontText">
      <h3>{text}</h3>
    </pre>
  </>
)



const profileComponent = (
  <>
    <div>
      <h3>Profile:</h3>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
      >
        LINKedin
      </a>
      <a target="_blank" href="https://github.com/AfterSurf/alexander-linss.de">
        LINKedHub
      </a>
    </div>
  </>
);

export default Home;
