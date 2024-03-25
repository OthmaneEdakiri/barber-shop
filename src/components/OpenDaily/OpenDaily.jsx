import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OpenDaily.css';
import { faShop } from '@fortawesome/free-solid-svg-icons';

const OpenDaily = () => {
    return (
        <div className="open-daily">
            <div className="box">
                <div className="box-content">
                    <i className="icon"><FontAwesomeIcon icon={faShop} /></i>
                    <strong>OPEN DAILY</strong>
                    <span>10:00 AM - 8:00 PM</span>
                </div>
            </div>
        </div>
    )
}

export default OpenDaily
