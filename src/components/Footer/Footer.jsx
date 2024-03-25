import './Footer.css';
import ArrowUp from '../ArrowUp/ArrowUp';
import Copyright from '../Copyright/Copyright';
import Branches from '../Branches/Branches';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="content">
                <h5>Our Branches</h5>
                <Branches />
                <div className="footer-bottom">
                    <Copyright />
                    <ArrowUp />
                </div>
            </div>
        </div>
    )
}

export default Footer
