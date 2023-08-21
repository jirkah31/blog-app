import { Link } from "react-router-dom";
import "./Button.scss";
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
  const isSmallButton = small ? "button-small" : "normal-btn";

  const button: JSX.Element = (
    <button
      type={type}
      className={classNames(className, isSmallButton, {
        "dark-mode": isDarkMode,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (path) {
    return (
      <Link className="button-small-link" to={path}>
        {button}
      </Link>
    );
  }

  return button;
};

export default Button;
