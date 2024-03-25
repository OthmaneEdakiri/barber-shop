import './Barber.css'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Barber = ({info}) => {
    return (
        <div className="barber">
            <div className="img-box">
                <img src={info.image} alt="" />
            </div>
            <div className="teamInfo">
                <p>{info.name}</p>
                <ul className="social-icons">
                    <li><a href={info.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href={info.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Barber
