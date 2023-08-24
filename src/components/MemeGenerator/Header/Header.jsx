import './header.scss';
import logo from '../../../assets/trollface.png';

function Header() {
    return ( 
        <header className='meme--header'>
            <img className='meme--logo' src={logo} alt="Troll face" />
            <h2>Meme Generator</h2>
            <span>React Course - Project 3</span>
        </header>
     );
}

export default Header;