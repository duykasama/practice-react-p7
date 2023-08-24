const darkColor = "#242424";
const lightColor = "whitesmoke";

function Styles() {
  return {};
}

export function DarkTheme() {
  return {
    bgColor: darkColor,
    textColor: lightColor,
  };
}

export function LightTheme() {
  return {
    bgColor: lightColor,
    textColor: darkColor,
  };
}

export default Styles;
