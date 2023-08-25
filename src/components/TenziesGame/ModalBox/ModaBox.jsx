import "./modalbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function ModalBox(props) {
  return (
    <div className="modal-box active">
      <button onClick={props.onClose} className="btn-close">
        <FontAwesomeIcon icon={faX} />
      </button>
      <div className="modal-box--content">
        <div>
          <h3>Congratulations!</h3>
          <p>You won in {props.rolls} rolls</p>
        </div>
        <button onClick={props.onPlayAgain} className="btn">Play again</button>
      </div>
    </div>
  );
}

export default ModalBox;
