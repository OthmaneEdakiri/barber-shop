import './Contact.css';
import {Information, OpenDaily, ContactMap} from '../index'
import { useContext } from 'react';
import { SectionsContext } from '../../App';


const Contact = () => {

    const {sectionRefs} = useContext(SectionsContext);

    return (
        <div id="contact" ref={sectionRefs.contact} className='contact section-padding'>
            <div className="content">
                <h2 className="title">Contact</h2>
                <div className="contact-content">
                    <Information />
                    <OpenDaily />
                    <ContactMap />
                </div>
            </div>
        </div>
    )
}

export default Contact
