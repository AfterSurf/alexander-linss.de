
import "./Form.css"
const Form = () => {

    const onSubmit = () => {
        console.log("Ich wurde geclickt.")
    }

    return (
        <div>
            <div className="container ">
                <form onSubmit={onSubmit}>
                <h2 className="">React Contact Form Component Example</h2>
                    <div className="">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    {/* <button className="btn btn-danger" type="submit"> */}
                    
                    <div className="">
                    <button className="btn btn-danger" type="button" onClick={onSubmit}>
                        {/* {formStatus} */}BUTTON
                    </button>
                    </div>
                
                </form>
            </div>
        </div>


    )
}

export default Form