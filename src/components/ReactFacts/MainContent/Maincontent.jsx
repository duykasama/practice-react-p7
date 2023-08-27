import { useEffect, useState } from "react";
import "./maincontent.scss";
import { DarkTheme } from "./Styles";
import { LightTheme } from "./Styles";

function MainContent() {
  const [isDark, setIsDark] = useState(false);
  const darkThemeStyles = DarkTheme();
  const lightThemeStyles = LightTheme();

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      setIsDark(true);
      setTheme(darkThemeStyles);
      console.log("set dark theme");
    }
  }, []);

  function setTheme(styles) {
    const body = document.getElementsByClassName("react-facts--main")[0];
    const dot = document.getElementById("dot");
    const themeControl = document.getElementById("theme-control");
    body.style.backgroundColor = styles.bgColor;
    body.style.color = styles.textColor;
    themeControl.style.backgroundColor = styles.textColor;
    dot.style.backgroundColor = styles.bgColor;
  }

  function handleClick() {
    setIsDark((prevState) => !prevState);
    if (isDark) {
      setTheme(lightThemeStyles);
      localStorage.removeItem("darkMode");
    } else {
      setTheme(darkThemeStyles);
      localStorage.setItem("darkMode", "true");
    }
  }

  return (
    <div className="content">
      <div className="container">
        <span>Light</span>
        <div onClick={handleClick} id="theme-control">
          <div id="dot" className={isDark ? "dark" : "light"}></div>
        </div>
        <span>Dark</span>
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
