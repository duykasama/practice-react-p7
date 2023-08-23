import "./cardmain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function CardMain() {
  return (
    <div className="card-main">
      <div className="info">
        <h1>Laura Smith</h1>
        <p className="title">Frontend Developer</p>
        <small>laurasmith.website</small>
        <div className="button-container">
          <button className="btn btn-email">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
          </button>
          <button className="btn btn-linkedin">
            <FontAwesomeIcon icon={faLink} /> <span>LinkedIn</span>
          </button>
        </div>
      </div>
      <section className="section">
        <h2 className="section--title">About</h2>
        <p className="detailed-info">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am alweays looking for new things to learn.
        </p>
      </section>
      <section className="section">
        <h2 className="section--title">Interest</h2>
        <p className="detailed-info">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepeneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </div>
  );
}

export default CardMain;
