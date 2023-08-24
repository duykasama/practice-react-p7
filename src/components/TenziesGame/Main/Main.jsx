import { useEffect, useState } from "react";
import Dice from "../Dice/Dice";
import "./main.scss";
import ModalBox from "../ModalBox/ModaBox";

function Main() {
  const [rollCount, setRollCount] = useState(0);
  const [dices, setDices] = useState(new Array());
  const [win, setWin] = useState(false);
  const [displayModalBox, setDisplayModalBox] = useState(false);
  let tempArray = new Array();

  for (let i = 0; i < 10; i++) {
    const randomValue = (Math.floor(Math.random() * 10) % 6) + 1;
    tempArray.push({ value: randomValue, isFixed: false });
  }

  useEffect(() => {
    if (dices.length < 10) {
      setDices(tempArray);
    }
    if (dices.length === 10 && !win) {
      checkWin();
    }
  }, [dices]);

  const roll = () => {
    if (win) {
      setDisplayModalBox(true);
      return;
    }

    setRollCount((prevState) => prevState + 1);
    setDices(
      dices.map((item) => ({
        ...item,
        value: !item.isFixed
          ? (Math.floor(Math.random() * 10) % 6) + 1
          : item.value,
      }))
    );
  };

  function checkWin() {
    if (dices.every((dice) => dice.value === dices[0].value)) {
      setDices((prevValue) =>
        prevValue.map((item) => ({ ...item, isFixed: true }))
      );
      setWin(true);
      setDisplayModalBox(true);
    }
  }

  const changeValueState = (dice) => {
    dice.isFixed = !dice.isFixed;
    setDices(
      dices.map((prevValue) => ({
        ...prevValue,
        isFixed: prevValue.value === dice.value && dice.isFixed,
      }))
    );
  };

  const handlePlayAgain = () => {
    setWin(false);
    setDices([]);
    setRollCount(0);
    setDisplayModalBox(false);
  };

  return (
    <>
      <section className="tenzies--content">
        <div className="dices-container">
          {dices.map((item, idx) => (
            <Dice
              key={idx}
              item={item}
              handleClick={() => changeValueState(item)}
            />
          ))}
        </div>
        <button onClick={roll} className="btn-roll">
          Roll
        </button>
      </section>
      {displayModalBox && (
        <ModalBox
          onClose={() => setDisplayModalBox(false)}
          onPlayAgain={handlePlayAgain}
          rolls={rollCount}
        />
      )}
    </>
  );
}

export default Main;
