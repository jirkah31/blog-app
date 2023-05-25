import "./ThemeButton.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeButton = ({
  isDarkMode,
  setIsDarkMode,
  className,
  onMouseOut,
  onMouseOver,
  bounce,
}: any) => {
  return (
    <button
      className="theme-button"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <FontAwesomeIcon
        className={className}
        icon={faLightbulb}
        size="2xl"
        bounce={bounce}
      />
    </button>
  );
};

export default ThemeButton;
