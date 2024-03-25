import './Price.css';

const Price = ({info}) => {
    return (
        <div className="price">
            <h6>{info.title}</h6>
            <span></span>
            <strong>${info.price}.00</strong>
        </div>
    )
}

export default Price
