import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ButtonNavigation.scss";
import classNames from "classnames";

type PropsT = {
  to: string;
  className: string;
  children: string;
  bounce: boolean;
  onMouseOver: any;
  onMouseOut: any;
};

const ButtonNavigation = ({
  to,
  className,
  bounce,
  onMouseOver,
  onMouseOut,
  children,
}: PropsT) => {
  return (
    <div
      className={classNames("nav-btn")}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link to={to} className={className}>
        {children}
        <FontAwesomeIcon className={className} bounce={bounce} icon={faPaw} />
      </Link>
    </div>
  );
};

export default ButtonNavigation;
