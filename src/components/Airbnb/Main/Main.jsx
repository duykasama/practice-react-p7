import Slider from '../Slider/Slider';
import './main.scss';

function Main({props}) {
    return ( 
        <section className='section'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            <Slider props={props} />
        </section>
     );
}

export default Main;