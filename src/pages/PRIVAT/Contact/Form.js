
import "./Form.css"
const Form = () => {

    const onSubmit = () => {
        console.log("Ich wurde geclickt.")
    }

    return (
        <div className="form-column">
            <div className="container ">
                <form onSubmit={onSubmit} className="contact-form">
                {/* <h2 >React Contact Form Component Example</h2> */}
                        <label className="name-label" htmlFor="name">
                            Name
                        </label>
                        <input className="name-input" type="text" id="name" required />
                        <label className="email-label" htmlFor="email">
                            Email
                        </label>
                        <input className="email-input" type="email" id="email" required />
                        <label className="message-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="message-textarea" id="message" required />
                    <button className="btn btn-danger" type="button" onClick={onSubmit}>
                        BUTTON
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Form