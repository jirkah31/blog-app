import React from "react";
import { ComponentProps } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./ButtonNavigation.module.scss";
import classNames from "classnames";

export interface ButtonNavPropsT extends ComponentProps<"button"> {
  path: string;
  isDarkMode: boolean;
}

const ButtonNavigation = ({
  path,
  isDarkMode,
  children,
}: ButtonNavPropsT): React.FunctionComponentElement<ButtonNavPropsT> => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.darkMode]: isDarkMode,
      })}
    >
      <Link
        to={path}
        className={classNames(styles.link, { [styles.darkMode]: isDarkMode })}
      >
        {children}
        <FontAwesomeIcon className={styles.icon} icon={faPaw} />
      </Link>
    </button>
  );
};

export default ButtonNavigation;
