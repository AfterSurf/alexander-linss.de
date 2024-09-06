import React from "react";
import { useNav } from "../../customHooks/useNav";
import "./itStyles.css";

const Home = () => {
  const homeRef = useNav("Home");
  return (
    <section ref={homeRef} id="homeItContainer" className="">
      <div className="homeItSplit">
        
        <div>
          <h3>Text</h3>
        </div>

{/* profile component */}
        <div>
          <h3>Profile:</h3>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexander-lin%C3%9F/"
          >
            LINKedin
          </a>
          <a
            target="_blank"
            href="https://github.com/AfterSurf/alexander-linss.de"
          >
            LINKedHub
          </a>
        </div>

{/* profile component */}

      </div>

    </section>
  );
};



export default Home;
