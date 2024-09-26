import React from "react";
import { useState } from "react";
import styles from "./Points.module.css";
import 'boxicons';


const Points = ({title, Component}) => {
    const [open, setOpen] = useState(false)

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <>
           <div className={styles.point}>
                <div onClick={clickHandler}  className={`${styles.title} ${open ? styles.title_border: ""}`}> 
                    <box-icon name="chevron-right" rotate={open ? "90" : ""} size="sm"/> {title} {open ? ":" : "?"}
                </div>
                {open ? <div>{Component}</div> : <></>}
            </div> 
        </>
    )
}

export default Points