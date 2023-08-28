import { useState } from "react";
import StartScreen from "../components/Quizzical/StartScreen/StartScreen";
import PlayScreen from "../components/Quizzical/PlayScreen/PlayScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Settings from "../components/Quizzical/Settings/Settings";

function Quizzical() {
  const [started, setStarted] = useState(false);
  const [configuring, setConfiguring] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleCancel = () => {
    setConfiguring(false);
  };

  return (
    <main className="quizzical--main">
      {!started && (
        <FontAwesomeIcon
          className="setting-icon"
          icon={faGear}
          onClick={() => setConfiguring((prevState) => !prevState)}
        />
      )}
      {configuring && <Settings onCancel={handleCancel} />}
      {started ? <PlayScreen /> : <StartScreen onStart={handleStart} />}
    </main>
  );
}

export default Quizzical;
