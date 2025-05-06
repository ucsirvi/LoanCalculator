import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
};

export default useThemeToggle;
