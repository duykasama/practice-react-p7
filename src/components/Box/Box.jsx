import { useState } from "react";
import "./box.scss";

function Box(props) {
  const [isOn, setIsOn] = useState(props.on);

  const styles = {
    backgroundColor: isOn ? "#242424" : "#DFDFDF",
  };

  function handleClick() {
    setIsOn((prevState) => !prevState);
  }

  return <div onClick={handleClick} style={styles} className="box"></div>;
}

export default Box;
