import "./ButtonTheme.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setDarkTheme } from "../../features/darkTheme";
import { useAppDispatch, useAppSelector } from "../../helpers_hooks/reduxHooks";
import { ButtonNavPropsT } from "../ButtonNavigation/ButtonNavigation";
import { JSXElementConstructor } from "react";

interface ButtonThemePropsT extends Omit<ButtonNavPropsT, "path"> {}

const ThemeButton: JSXElementConstructor<ButtonThemePropsT> = ({
  className,
  onMouseOut,
  onMouseOver,
  bounce,
}: ButtonThemePropsT) => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
    dispatch(setDarkTheme({ isDarkMode: !isDarkMode }));
  };

  return (
    <button
      className="theme-button"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={handleTheme}
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
