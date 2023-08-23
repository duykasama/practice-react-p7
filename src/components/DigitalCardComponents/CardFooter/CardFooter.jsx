import './cardfooter.scss';
import twitterLogo from '../../../assets/social-logos/twitter-sign.png';
import facebookLogo from '../../../assets/social-logos/facebook.png';
import instagramLogo from '../../../assets/social-logos/instagram.png';
import gitHubLogo from '../../../assets/social-logos/github-icon.png';

function CardFooter() {
    return ( 
        <div className='card-footer'>
            <img className='social-logo' src={twitterLogo} alt="Twitter logo" />
            <img className='social-logo' src={facebookLogo} alt="Facebook logo" />
            <img className='social-logo' src={instagramLogo} alt="Instagram logo" />
            <img className='social-logo' src={gitHubLogo} alt="GitHub logo" />
        </div>
     );
}

export default CardFooter;