import './header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";


function Header() {
    return ( 
        <header className="header">
            <FontAwesomeIcon className='icon' icon={faEarthAmericas} />
            <h4>My travel journal</h4>
        </header>
     );
}

export default Header;