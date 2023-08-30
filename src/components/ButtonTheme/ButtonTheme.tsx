import styles from "./ButtonTheme.module.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setDarkTheme } from "../../redux/features/darkTheme";
import { useAppDispatch } from "../../redux/reduxHooks";
import { ButtonNavPropsT } from "../ButtonNavigation/ButtonNavigation";
import { JSXElementConstructor } from "react";
import classNames from "classnames";

interface ButtonThemePropsT extends Omit<ButtonNavPropsT, "path"> {}

const ThemeButton: JSXElementConstructor<ButtonThemePropsT> = ({
  isDarkMode,
  onMouseOut,
  onMouseOver,
  bounce,
}: ButtonThemePropsT) => {
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
    dispatch(setDarkTheme({ isDarkMode: !isDarkMode }));
  };

  return (
    <button
      className={classNames(styles.btnTheme)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={handleTheme}
    >
      <FontAwesomeIcon
        className={classNames({ [styles.darkMode]: isDarkMode })}
        icon={faLightbulb}
        size="2xl"
        bounce={bounce}
      />
    </button>
  );
};

export default ThemeButton;
