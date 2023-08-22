import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";

export interface ButtonPropsT {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  path?: string;
  small?: boolean;
}

const Button = ({
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
    return <Link to={path}>{button}</Link>;
  }

  return button;
};

export default Button;
