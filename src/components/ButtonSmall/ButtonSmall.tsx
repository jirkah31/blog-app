import { Link } from "react-router-dom";
import "./ButtonSmall.scss";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";

export interface ButtonSmallPropsT {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  path?: string;
}

const ButtonSmall = ({
  className,
  onClick,
  path,
  children,
}: ButtonSmallPropsT): React.ReactElement<ButtonSmallPropsT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const button: JSX.Element = (
    <button
      className={classNames(className, "button-small", {
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

export default ButtonSmall;
