import { ComponentProps } from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ButtonNavigation.scss";
import classNames from "classnames";

export interface ButtonNavPropsT extends ComponentProps<"button"> {
  path: string;
  bounce: boolean;
  onMouseOver: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOut: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonNavigation = ({
  path,
  className,
  bounce,
  onMouseOver,
  onMouseOut,
  children,
}: ButtonNavPropsT): React.FunctionComponentElement<ButtonNavPropsT> => {
  return (
    <button
      className={classNames("nav-btn")}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link to={path} className={className}>
        {children}
        <FontAwesomeIcon className={className} bounce={bounce} icon={faPaw} />
      </Link>
    </button>
  );
};

export default ButtonNavigation;
