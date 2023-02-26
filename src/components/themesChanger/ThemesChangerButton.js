import React, { useState } from "react";

function changeListedElementsThemes(elementList, theme) {
  elementList.forEach((element) => {
    changeElementTheme(element.DOMElement, element.className, theme);
  });
}

function changeElementTheme(DOMElement, className, theme) {
  const elements = document.querySelectorAll(DOMElement + "." + className);
  elements.forEach((element) => {
    element.className = className + theme;
  });
}

function ThemeChangeButton(props) {
  const theme1 = props.firstTheme;
  const theme2 = props.secondTheme;
  const elementList = props.elementList;

  const [theme, setTheme] = useState(theme1);
  const toggleTheme = () => {
    theme === theme1 ? setTheme(theme2) : setTheme(theme1);
    document.body.className = theme;
    changeListedElementsThemes(elementList, theme);
  };
  return (
    <button onClick={toggleTheme} className=".btnToggle">
      {props.children}
    </button>
  );
}

export default ThemeChangeButton;
