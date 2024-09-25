import React from "react";
import styles from "./Footer.module.css"

export default function footer({setShowImpressum, showImpressum}) {
  return (
    <>
      <div className={styles.footer}>
        <p
          onClick={() => {
            setShowImpressum(!showImpressum);
          }}
         className={styles.impressum}>
          Impressum
        </p>
        <p> &copy; 2024 Alexander Linß</p>
      </div>
    </>
  );
}
