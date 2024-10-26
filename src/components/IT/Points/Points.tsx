import React from "react";
import { useState } from "react";
import styles from "./Points.module.css";
// eslint-disable-next-line
import Icon from "../../Icon";

type PointsInputProps = {
    title: string,
    className?: string,
    Component: any, // toDo
    alternativTitle: string
}

const Points = ({title, Component, alternativTitle}: PointsInputProps) => {
    const [open, setOpen] = useState(false)

    function clickHandler() {
        setOpen(!open);
    }

    return (
        <>
           <div className={styles.point}>
                <div onClick={clickHandler}  className={`${styles.title} ${open ? styles.title_border: ""} ${open ? "" : styles.title_hover}`}> 
                    <Icon name="chevron-right" rotate={open ? "90" : ""} size="sm" /> 
                    {open && alternativTitle ?  alternativTitle : title}{open ? ":" : "?"}
                </div>
                {open ? <div>{Component}</div> : <></>}
            </div> 
        </>
    )
}

export default Points