import { useState } from "react";
import Box from "../components/Box/Box";
import Box2 from "../components/Box/Box2";
import data from "../data.json";

function BoxChallenge() {
  const [boxes, setBoxes] = useState(data);

  function toggle(box) {
    box.on = !box.on;
    setBoxes((prevState) =>
      prevState.map((state) => (state.id === box.id ? box : state))
    );
  }
  return (
    <main className="box-container">
      {boxes.map((item) => (
        <Box2 key={item.id} boxClick={toggle} box={item} />
      ))}
    </main>
  );
}

export default BoxChallenge;
