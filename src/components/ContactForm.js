import "./ContactForm.css";
function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send message to us</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="email"/>
                <input placeholder="subject"/>
                <textarea placeholder="message" rows="4"></textarea>
                <button>send message</button>
            </form>
        </div>

    );
}
export default ContactForm;