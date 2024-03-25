import { prices } from '../../constants';
import Price from '../Price/Price';
import './Prices.css';

const Prices = () => {
    return (
        <div className="prices">
            {prices.map(price=><Price 
                key={price.id} 
                info={{
                    title:price.title,
                    price:price.price
                }}
            />)}
        </div>
    )
}

export default Prices
