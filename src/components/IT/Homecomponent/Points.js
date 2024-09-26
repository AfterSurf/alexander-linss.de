import React from "react";
import { useState } from "react";
import styles from "./Points.module.css"
import 'boxicons'


const Points = ({title, Component}) => {
    const [open, setOpen] = useState(false)

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <>
           <div className={styles.point}>
                <div onClick={clickHandler} className={styles.title}>
                    <box-icon name="chevron-right" rotate={open ? "90" : ""}/> {title} {open ? ":" : "?"}
                </div>
                {/* {open ? <div>{Component}</div> : <div>...</div>} */}
                {open ? <div>{Component}</div> : <></>}
            </div> 
        </>
    )
}

export default Points