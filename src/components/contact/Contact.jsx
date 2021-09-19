
import { Mail, Phone } from "@material-ui/icons";
import "./contact.scss"

function Contact() {

    const handlSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="containermob">
            <div className="formobile">
                <Mail className="mailIcon" />
                
                <span>mahderetewelign@gmail.com</span>
            </div>

            <div className="formobile">
                <Phone className="contactIcon" />
                <span>+251 96 243 9494</span>
            </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handlSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
