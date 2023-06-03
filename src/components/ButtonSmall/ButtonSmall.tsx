import { Link } from "react-router-dom";
import "./ButtonSmall.scss";
import classNames from "classnames";

const ButtonSmall = ({
  className,
  onClick,
  isDarkMode,
  path,
  children,
}: any) => {
  const button = (
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
