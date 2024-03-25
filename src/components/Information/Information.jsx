import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Information.css';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Information = () => {
    return (
        <div className="information">
            <h5>Contact Information</h5>
            <a href="">(+49) 120-240-3600</a>
            <a href="">hello@barber.beauty</a>
            <ul className="social-icon">
                <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            </ul>
        </div>
    )
}

export default Information
