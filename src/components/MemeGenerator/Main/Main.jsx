import "./main.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [memes, setmemes] = useState();
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange1 = (event) => {
    setValue1(event.currentTarget.value.toUpperCase());
  };

  const handleInputChange2 = (event) => {
    setValue2(event.currentTarget.value.toUpperCase());
  };

  const handleClick = () => {
    setUrl(
      memes.data.memes[Math.floor(Math.random() * memes.data.memes.length)].url
    );
  };

  //#region make api call
  async function fetchData() {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData().then((data) => {
    setmemes(data);
  });
  //#endregion

  return (
    <div className="meme-main">
      <div className="container">
        <div className="input-container">
          <input type="text" onChange={handleInputChange1} />
          <input type="text" onChange={handleInputChange2} />
        </div>
        <button onClick={handleClick}>
          <span>Get a new meme image</span>
          <FontAwesomeIcon className="icon" icon={faImage} />
        </button>
      </div>
      <div className="dynamic-container">
        <div className="dynamic-input">
          {value1 && <div>{value1}</div>}
          {value2 && <div>{value2}</div>}
        </div>
        <img src={url} />
      </div>
    </div>
  );
}

export default Main;
