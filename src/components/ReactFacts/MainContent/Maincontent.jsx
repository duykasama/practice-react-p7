import { useState } from "react";
import "./maincontent.scss";
import { DarkTheme } from "./Styles";
import { LightTheme } from "./Styles";

function MainContent() {
  const [isDark, setIsDark] = useState(false);
  const darkThemeStyles = LightTheme();
  const lightThemeStyles = DarkTheme();

  function setTheme(styles) {
    const body = document.getElementsByClassName("react-facts--main")[0];
    const dot = document.getElementById("dot");
    const themeControl = document.getElementById("theme-control");
    body.style.backgroundColor = styles.bgColor;
    body.style.color = styles.textColor;
    dot.style.backgroundColor = styles.bgColor;
    themeControl.style.backgroundColor = styles.textColor;
    dot.style.left = isDark ? "0.1rem" : "calc(100% - 1.2rem + 0.1rem)";
  }

  function handleClick() {
    setIsDark((prevState) => !prevState);
    if (isDark) {
      setTheme(darkThemeStyles);
    } else {
      setTheme(lightThemeStyles);
    }
  }

  return (
    <div className="content">
      <div className="container">
        <span>Dark</span>
        <div onClick={handleClick} id="theme-control">
          <div id="dot"></div>
        </div>
        <span>Light</span>
      </div>

      <h1 className="react-facts--title">Fun facts about React</h1>
      <ul className="list-group">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100k stars on GitHub</li>
        <li className="list-item">Is maintained by Facebook</li>
        <li className="list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  );
}

export default MainContent;
