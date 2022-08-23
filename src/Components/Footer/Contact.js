import './Contact.css';
import LinkIcon from '../Common/LinkIcon.js'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Contact = props =>{

    const toClipBoard = text =>{
        navigator.clipboard.writeText(text);
        window.alert("Email Copied to Clipboard!!");
    }

    const copySchool = () =>{
        toClipBoard("zejing.li@mail.utoronto.ca");

    }

    const copyPersonal = () =>{
        toClipBoard("jianli5881@gmail.com");

    }
    return(
    <div className="contact-svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAEBF2" fillOpacity="1" d="M0,192L720,288L1440,64L1440,320L720,320L0,320Z"></path></svg>
    
        <div className="contact-container">
            <div className="contact-info">
                <h1 className="contact-text contact-title">Contact</h1>
                <LinkIcon></LinkIcon>
                <br></br>
                <h1 className="contact-text contact-subtitle">Email</h1>
                <div><label onClick={copySchool } className="contact-text">School: zejing.li@mail.utoronto.ca</label></div>
                <div><label onClick={copyPersonal} className="contact-text">Personal: jianli5881@gmail.com</label></div>
                <br></br>
                <h1 className="contact-text contact-subtitle">Location:</h1>
                <div><label className="contact-text">Stouffville, ON</label></div>
                <div><label className="contact-text">Canada</label></div>
                
            </div>

            <div className="map-column">

                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91939.46837486631!2d-79.29122916879001!3d43.936430471171384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52d7cee084681%3A0xf59c02d03f1b6537!2sWhitchurch-Stouffville%2C%20ON!5e0!3m2!1sen!2sca!4v1661047029907!5m2!1sen!2sca" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            


        </div>

        <div className="footer-text">
            © 2022, John Li with &nbsp;
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" color="red" vertical-align="-2px" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797-0.671-1.429-2.118-2.797-3.8-2.797-2.318 0-4.2 1.882-4.2 4.2 0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.050 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"></path></svg>
            &nbsp; from Stouffville, Canada
        </div>
    </div>
    );

};

export default Contact;