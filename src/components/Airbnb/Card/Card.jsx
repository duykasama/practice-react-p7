import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function Card({cardProps}) {
    return ( 
        <div className='card'>
            { cardProps.status && <div className='status'>{cardProps.status}</div> }
            <img className='car--img' src={cardProps.image} />
            <div className='info'>
                <div className='card--rating'>
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <span>{cardProps.rating} ({cardProps.ratingQuantity}) • {cardProps.location}</span>
                </div>
                <p>{cardProps.description}</p>
                <p className='card--price'><b>From ${cardProps.price}</b> / person</p>
            </div>
        </div>
     );
}

export default Card;