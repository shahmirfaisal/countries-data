import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [theme, changeTheme] = useState("dark");
  const [themeName, changeThemeName] = useState("Dark Mode");

  const handleChangeColor = (bgColor, sectionColor, textColor) => {
    let root = document.querySelector(":root");
    root.style.setProperty("--bg-color", bgColor);
    root.style.setProperty("--section-color", sectionColor);
    root.style.setProperty("--text-color", textColor);
  };

  const changeThemeColor = () => {
    if (theme === "dark") {
      handleChangeColor(
        "hsl(207, 26%, 17%)",
        "hsl(209, 23%, 22%)",
        "rgb(245,245,245)"
      );
      changeTheme("light");
      changeThemeName("Light Mode");
    } else {
      handleChangeColor("rgba(245, 245, 245)", "white", "rgb(26, 26, 26)");
      changeTheme("dark");
      changeThemeName("Dark Mode");
    }
  };

  return (
    <header className={classes.Header}>
      <h1>Where in the world?</h1>
      <h5 onClick={changeThemeColor}>
        <i className="far fa-moon"></i>
        {themeName}
      </h5>
    </header>
  );
};

export default Header;
