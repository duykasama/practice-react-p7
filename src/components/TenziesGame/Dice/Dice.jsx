import { useState } from "react";
import "./dice.scss";
import { useEffect } from "react";

function Dice() {
  const [isFixed, setIsFixed] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    if (!isFixed) {
      const randomValue = (Math.floor(Math.random() * 10) % 6) + 1;
      setValue(randomValue);
    }
  });

  const changeValueState = () => {
    setIsFixed((prevState) => !prevState);
  };

  return (
    <div onClick={changeValueState} className={`dice ${isFixed && "fixed"}`}>
      {value}
    </div>
  );
}

export default Dice;
