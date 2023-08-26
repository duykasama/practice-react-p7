import { useState } from "react";
import StartScreen from "../components/Quizzical/StartScreen/StartScreen";
import PlayScreen from "../components/Quizzical/PlayScreen/PlayScreen";

function Quizzical() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  }

  return (
    <main className="quizzical--main">
      {started ? <PlayScreen /> : <StartScreen onStart={handleStart} />}
    </main>
  );
}

export default Quizzical;
