import { useState } from "react";
import "./joke.scss";

function Joke(props) {
  const [isVisible, setIsVisible] = useState(false);

  function changeState() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div className="joke">
      <h2>{props.setup}</h2>
      {isVisible && <p>{props.punchline}</p>}
      <button className="btn" onClick={changeState}>
        {!isVisible ? "View punchline" : "Hide punchline"}
      </button>
    </div>
  );
}

export default Joke;
