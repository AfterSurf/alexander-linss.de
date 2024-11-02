import { useState } from "react";
import styles from "./Points.module.scss";

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
                    { open ? <i className="bx bx-chevron-down"/> : <i className="bx bx-chevron-right"/> }
                    {open && alternativTitle ?  alternativTitle : title}{open ? ":" : "?"}
                </div>
                {open ? <div>{Component}</div> : <></>}
            </div> 
        </>
    )
}

export default Points