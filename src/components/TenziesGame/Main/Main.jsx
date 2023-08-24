import { useState } from "react";
import Dice from "../Dice/Dice";
import "./main.scss";

function Main() {
  const [change, setChange] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const tempArray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  const handleRoll = () => {
    setChange((prevState) => !prevState);
    setRollCount(prevState => prevState + 1);
  };

  return (
    <section className="tenzies--content">
      <div className="dices-container">
        {tempArray.map((item, idx) => (
          <Dice key={idx} />
        ))}
      </div>
      <button onClick={handleRoll} className="btn-roll">
        Roll
      </button>
    </section>
  );
}

export default Main;
