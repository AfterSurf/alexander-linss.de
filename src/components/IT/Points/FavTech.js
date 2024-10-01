import React from "react";
import Styles from "./Points.module.css";

const FavTech = () => {
  return (
    <div className={Styles.why_text}>
      <div>Am liebsten arbeite ich aktuell mit: </div>
      <ul>
        <li>React.js / Next.js</li>
        <li>Node.js</li>
        <li>CSS modules</li>
        <li>Figma</li>
      </ul>
      <br/>
      <div>Hier ein Projekt von mir:<a href="https://licht-musik.eu/" target="_blank" rel="noreferrer">LICHT</a></div>
    </div>
  );
};

export default FavTech;
