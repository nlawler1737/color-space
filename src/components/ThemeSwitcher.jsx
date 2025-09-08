import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useTheme } from "../contexts/ThemeContext.jsx";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const icon =
    theme === "dark" ? (
      <Moon width="100%" height="100%" />
    ) : (
      <Sun width="100%" height="100%" />
    );
  return (
    <button
      className={"toggle-button"}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}
