import React from "react";
import styles from "./Aufgabe.module.css";

const Aufgabe = ({ title, description, img, link2project }) => {

  return (
    <div  className={styles.aufgabe}>
      <h1 className={styles.aufgabenTitle}>{title}</h1>
      <a href={link2project} target="_blank" rel="noreferrer">
        <img className={styles.aufgabenImage} src={img} alt="symbolic"/>
      </a>
      <p className={styles.aufgabenText}>{description}</p>
    </div>
  );
};

export default Aufgabe;
