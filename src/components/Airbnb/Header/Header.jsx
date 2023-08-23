import './header.scss';
import airbnbLogo from '/resources/airbnb-transparent-logo.png';

function Header() {
    return ( 
        <header className='airbnb--header'>
            <img className='logo' src={airbnbLogo} alt="Airbnb logo" />
        </header>
     );
}

export default Header;