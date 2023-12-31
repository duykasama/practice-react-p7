import "./navbar.scss";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [shown, setShown] = useState(false);
  const changeShowStatus = () => {
    setShown((prevState) => !prevState);
  };

  const hide = () => {
    setShown(false);
  };
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={reactLogo} alt="React logo" />
      </Link>
      <div className="page-navigation" onClick={changeShowStatus}>
        <span>Select page</span>

        <FontAwesomeIcon
          
          icon={shown ? faChevronUp : faChevronDown}
        />

        {shown && (
          <div className="navigation-content" onMouseLeave={hide}>
            <Link to={"/react-facts"}>React facts</Link>
            <Link to={"/box-challenge"}>Box challenge</Link>
            <Link to={"/jokes"}>Jokes</Link>
            <Link to={"/meme-generator"}>Meme generator</Link>
            <Link to={"/airbnb-experience"}>Airbnb experience</Link>
            <Link to={"/travel-journal"}>Travel journal</Link>
            <Link to={"/digital-card"}>Digital card</Link>
            <Link to={"/starwars-wiki"}>Star Wars wiki</Link>
            <Link to={"/tenzies"}>Tenzies game</Link>
            <Link to={"/quizzical"}>Quizzical</Link>
            <Link to={"/demo-local-storage"}>Demo local storage</Link>
            <Link to={"/demo-api"}>Demo api</Link>
            <Link to={"/form-practice"}>Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
