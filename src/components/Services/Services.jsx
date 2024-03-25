import { services } from '../../constants';
import {Service} from '../../components'
import './Services.css';
import { useContext } from 'react';
import { SectionsContext } from '../../App';


const Services = () => {

    const {sectionRefs} = useContext(SectionsContext);

    return (
        <div id="services" ref={sectionRefs.services} className='services section-padding'>
            <div className="content">
                <h2 className="title">Service</h2>
                <div className="services-content">
                    {services.map(service=><Service key={service.id} 
                        info = {{
                            title : service.title,
                            image : service.image,
                            price : service.price
                        }}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Services
