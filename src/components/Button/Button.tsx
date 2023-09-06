import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";

export interface ButtonPropsT {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  path?: string;
  small?: boolean;
  style?: object;
}

const Button = ({
  style,
  small,
  className,
  onClick,
  path,
  type,
  children,
}: ButtonPropsT): React.ReactElement<ButtonPropsT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const isSmallButton = small ? styles.btnSmall : styles.btnNormal;

  const button: JSX.Element = (
    <button
      style={style}
      type={type}
      className={classNames(className, isSmallButton, {
        [styles.btnDarkMode]: isDarkMode,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (path) {
    return (
      <Link style={style} to={path}>
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;
