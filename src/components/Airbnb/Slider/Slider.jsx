import Card from "../Card/Card";
import './slider.scss';

function Slider({props}) {
    return ( 
        <div className='card-slider'>
            { props.map(prop => <Card cardProps={prop} />)}
        </div>
     );
}

export default Slider;