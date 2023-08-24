import './navbar.scss';
import reactLogo from '../../../assets/react.svg';

function Navbar() {
    return ( 
        <nav className="react-facts--navbar">
            <img className='react-logo' src={reactLogo} alt="" />
            <h2>ReactFacts</h2>
            <h4>React Course - Project 1</h4>
        </nav>
     );
}

export default Navbar;