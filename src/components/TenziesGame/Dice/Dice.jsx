import { useState } from "react";
import "./dice.scss";
import { useEffect } from "react";

function Dice({item, handleClick}) {
  // const [isFixed, setIsFixed] = useState(false);
  // const [value, setValue] = useState();
  // useEffect(() => {
  //   if (!isFixed) {
  //     const randomValue = (Math.floor(Math.random() * 10) % 6) + 1;
  //     setValue(randomValue);
  //   }
  // });

  // const changeValueState = () => {
  //   setIsFixed((prevState) => !prevState);
  // };

  return (
    <div onClick={handleClick} className={`dice ${item.isFixed && "fixed"}`}>
      {item.value}
    </div>
  );
}

export default Dice;
