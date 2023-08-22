import { ComponentProps } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./ButtonNavigation.module.scss";
import classNames from "classnames";

export interface ButtonNavPropsT extends ComponentProps<"button"> {
  path: string;
  bounce: boolean;
  onMouseOver: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOut: React.MouseEventHandler<HTMLButtonElement>;
  isDarkMode: boolean;
}

const ButtonNavigation = ({
  path,
  isDarkMode,
  bounce,
  onMouseOver,
  onMouseOut,
  children,
}: ButtonNavPropsT): React.FunctionComponentElement<ButtonNavPropsT> => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.darkMode]: isDarkMode,
      })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link
        to={path}
        className={classNames(styles.link, { [styles.darkMode]: isDarkMode })}
      >
        {children}
        <FontAwesomeIcon className={styles.icon} bounce={bounce} icon={faPaw} />
      </Link>
    </button>
  );
};

export default ButtonNavigation;
