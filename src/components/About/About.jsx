import './About.css'

import { barbers } from '../../constants'
import Barber from '../Barber/Barber'
import { useContext } from 'react'
import { SectionsContext } from '../../App'


const About = () => {

    const {sectionRefs} = useContext(SectionsContext);

    return (
        <div id="about" ref={sectionRefs.about} className='about content section-padding'>
            <h2 className='title'>Best hairdressers</h2>
            <h6>Meet Barbers</h6>
            <div className="barbers">
                {barbers.map(barber=><Barber key={barber.id} info={{
                    name:barber.name,
                    facebook:barber.facebook,
                    instagram:barber.instagram,
                    image:barber.image,
                }}/>)}
            </div>
        </div>
    )
}

export default About
