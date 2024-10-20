import React from "react";
import Styles from "./Points.module.css";
import 'boxicons';

const Why = () => {
    return (
        <div className={Styles.why_text}>
            <div>Diese Seite ist ein Ort, an dem man sich austoben und Technologien entdecken kann </div>
            <div>Außerdem kann man hier mit mir über LinkedIn in Kontakt kommen. </div>
            <div>Diese Seite ist stetig im Wandel.</div>
            <div>So wie alles stetig im Wandel ist.<box-icon type='solid' name='balloon'></box-icon></div>
        </div>
    )
}

export default Why