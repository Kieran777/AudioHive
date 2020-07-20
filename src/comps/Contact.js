import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/fontawesome-free-brands';

function Contact(){
    
        return(
            <div id="mainInsert">
                <h2 className="highlightHeadings">Contact Us</h2>
                <h3 className="highlightHeadings">To Contact us:</h3>
                <h3>Send us an Email at:  </h3>
                <a href="mailto: Audiohiveproject@gmail.com">Audiohiveproject@gmail.com</a>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="contactSymbols" icon={faTwitter}/>
                <h3>Drop us a message on twitter:</h3>
                <a href="https://twitter.com/AudioHivePro">@AudioHivePro</a>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="contactSymbols" icon={faInstagram}/>
                <h3>Dm us on instagram: </h3>
                <a href="https://www.instagram.com/audiohivepro/">audiohivepro</a>
                <br></br>
                <br></br>
                <FontAwesomeIcon className="contactSymbols" icon={faFacebook}/>
                <h3>Or Like and Comment on our Facebook page: </h3>
                <a href="https://m.facebook.com/AudioHivepro-105121191285300/?tsid=0.428467265954215&source=result">AudioHivePro</a>
            </div>
        )
    
}

export default Contact;