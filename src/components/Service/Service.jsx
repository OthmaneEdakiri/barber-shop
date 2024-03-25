import './Service.css'

const Service = ({info}) => {
    return (
        <div className="service">
            <img src={info.image} alt="" />
            <div className="service-info">
                <h4 className='service-title'>{info.title}</h4>
                <strong className='service-price'>${info.price}.00</strong>
            </div>
        </div>
    )
}

export default Service
