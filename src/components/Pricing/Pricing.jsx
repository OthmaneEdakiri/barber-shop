import { useContext } from 'react';
import { pricingImg } from '../../assets';
import Prices from '../Prices/Prices';
import './Pricing.css';
import { SectionsContext } from '../../App';

const Pricing = () => {

    const {sectionRefs} = useContext(SectionsContext);


    return (
        <div id="pricing" ref={sectionRefs.pricing} className='section-padding pricing'>
            <div className="pricing-content content">
                <div className="pricing-list">
                    <h2 className="title">Price List</h2>
                    <strong>Starting at $25</strong>
                    <Prices />
                </div>
                <div className="pricing-img">
                    <div className="box-img">
                        <img src={pricingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
