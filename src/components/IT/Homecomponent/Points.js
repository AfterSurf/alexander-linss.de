import React from "react";
import { useState } from "react";
import styles from "./Points.module.css"

const Points = ({title, Component}) => {
    const [open, setOpen] = useState(false)

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <>
            <div onClick={clickHandler} className={styles.title}>{title} {open ? ":" : "?"}</div>
            {open ? <div>{Component}</div> : <div>...</div>}
        </>
    )
}

export default Points