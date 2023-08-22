import "./navbar.scss";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={'/'}>
        <img src={reactLogo} alt="React logo" />
      </Link>
      <ul>
        <li>
          <Link to={"/box-challenge"}>Box challenge</Link>
        </li>
        <li>
          <Link to={"/jokes"}>Jokes</Link>
        </li>
        <li>
          <Link to={"/form-practice"}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
