import { useState } from "react";
import Icon from "./common/Icon";

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-white/20 text-white rounded-full hover:scale-110 transition-all cursor-pointer"
    >
      <Icon name={`${isDarkMode ? "sun" : "moon"}`} />
    </button>
  );
}

export default ThemeButton;
