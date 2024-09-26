import React from "react";
import Styles from "./Points.module.css";

const FavTech = () => {
  return (
    <div className={Styles.why_text}>
      <div>Welche Technologien sind interessant?</div>
      <div>mit welchen technologien arbeite ich gerne;</div>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
      </ul>
      <div>welche Projelte von mir sind zZ online:</div>
      <a href="https://licht-musik.eu/" target="_blank" rel="noreferrer">LICHT</a>
    </div>
  );
};

export default FavTech;
