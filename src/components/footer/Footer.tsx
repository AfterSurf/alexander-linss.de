import React from "react";
import styles from "./Footer.module.css"
import { getImpressumProps } from "../types/types";


export default function Footer({setShowImpressum, showImpressum}: getImpressumProps) {
  return (
    <>
      <div className={styles.footer}>
        <p
          onClick={() => {
            console.log("clicked showImpressum")
            setShowImpressum(!showImpressum);
          }}
         className={styles.impressum}>
          Impressum
        </p>
        <p>&copy; 2024 Alexander Linß</p>
      </div>
    </>
  );
}
