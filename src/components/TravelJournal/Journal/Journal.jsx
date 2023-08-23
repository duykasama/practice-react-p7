import "./journal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Journal(props) {
  const journal = props.journalObject;
  const parts = journal.since.split("-");
  const dateFormatOption = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const startDate = new Intl.DateTimeFormat("en-US", dateFormatOption).format(
    new Date(journal.since)
  );
  const endDate = new Intl.DateTimeFormat("en-US", dateFormatOption).format(
    new Date(journal.until)
  );

  return (
    <div className="journal">
      <img src={journal.image} alt={journal.title} />
      <div className="info">
        <div>
          <FontAwesomeIcon className="location-dot" icon={faLocationDot} />
          <span className="location">{journal.location.toUpperCase()}</span>
          <a href={journal.map} target="_blank">
            <small className="view-location">View on Google Maps</small>
          </a>
        </div>
        <h1>{journal.title}</h1>
        <p>
          <b>
            {startDate} - {endDate}
          </b>
        </p>
        <p>{journal.description}</p>
      </div>
    </div>
  );
}

export default Journal;
