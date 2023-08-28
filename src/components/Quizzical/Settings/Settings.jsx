import { useEffect, useState } from "react";
import "./settings.scss";
import apiData from "../../../apiCategoryList.json";

function Settings(props) {
  const [settings, setSettings] = useState({ topic: "", questions: 0, difficulty: "" });
  const saveSettings = (event) => {
    event.preventDefault();
    localStorage.setItem("quizzicalSettings", JSON.stringify(settings));
    props.onCancel();
  };

  useState(() => {
    const settings = localStorage.getItem("quizzicalSettings");
    if (settings) {
      setSettings(JSON.parse(settings));
    } else {
      setSettings({ topic: 9, questions: 10, difficulty: "" });
    }
    console.log(settings);
  }, []);

  function handleInputChange(event) {
    setSettings((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={saveSettings} className="settings">
      <div className="user-input">
        <span>Topic</span>
        <select
          name="topic"
          defaultValue={settings.topic}
          onChange={handleInputChange}
        >
          {apiData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.category}
            </option>
          ))}
        </select>
      </div>
      <div className="user-input">
        <span>Difficulty</span>
        <select
          name="difficulty"
          defaultValue={settings.difficulty}
          onChange={handleInputChange}
        >
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="user-input">
        <span>No. of questions</span>
        <input
          onChange={handleInputChange}
          type="number"
          min={1}
          max={50}
          name="questions"
          value={settings.questions}
        />
      </div>
      <div className="confirmation">
        <button onClick={props.onCancel} type="button" className="btn">
          Cancel
        </button>
        <button type="submit" className="btn">
          Save
        </button>
      </div>
    </form>
  );
}

export default Settings;
