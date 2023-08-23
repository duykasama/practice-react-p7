import './hero.scss';
import image1 from '/resources/annie-spratt-IgDRd223czY-unsplash.jpg';
import image2 from '/resources/bunting-wild-photography-UtSZonAHbYU-unsplash.jpg';
import image3 from '/resources/daniele-colucci-t2H6i-nJDDU-unsplash.jpg';
import image4 from '/resources/ice-cave.jpg';
import image5 from '/resources/jovan-vasiljevic-e4kruOZB9cw-unsplash.jpg';
import image6 from '/resources/set-sj-vBNwDAPrTTA-unsplash.jpg';
import image7 from '/resources/youzi-lin-Zega-znwiLQ-unsplash.jpg';

function Hero() {
    return ( 
        <div className='hero'>
            <img className='hero--img' src={image1} />
            <img className='hero--img' src={image2} />
            <img className='hero--img' src={image3} />
            <img className='hero--img' src={image4} />
            <img className='hero--img' src={image5} />
            <img className='hero--img' src={image6} />
            <img className='hero--img' src={image7} />
        </div>
     );
}

export default Hero;