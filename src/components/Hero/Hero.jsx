import { useContext } from "react"
import {Appointment} from "../../components"
import "./Hero.css"
import { SectionsContext } from "../../App"

const Hero = () => {

    const {sectionRefs} = useContext(SectionsContext);

    return (
        <div id="home" ref={sectionRefs.home} className="hero section-padding">
            <div className="hero-content content">
                <h1><strong>Barber <br /><em>Shop</em></strong></h1>
                <p className="hero-desc">Get the most professional haircut for you</p>
                <div className="hero-btns">
                    <a href="#about">About Us</a>
                    <a href="">What we do</a>
                </div>
            </div>
            <Appointment />
        </div>
    )
}

export default Hero
