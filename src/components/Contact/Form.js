import React from "react"
import styles from "./Form.module.css"
const Form = () => {

    const onSubmit = () => {
        console.log("Ich wurde geclickt.")
    }

    return (
        <div className={styles.form_column}>
            <div className={styles.container}>
                <form onSubmit={onSubmit} className={styles.contact_form}>
                        <label className={styles.name_label} htmlFor="name">
                            Name
                        </label>
                        <input className={styles.name_input} type="text" id="name" required />
                        <label className={styles.email_label} htmlFor="email">
                            Email
                        </label>
                        <input className={styles.email_input} type="email" id="email" required />
                        <label className={styles.message_label} htmlFor="message">
                            Message
                        </label>
                        <textarea className={styles.message_textarea} id="message" required />
                    <button className={styles.btn} type="button" onClick={onSubmit}>
                        BUTTON
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form