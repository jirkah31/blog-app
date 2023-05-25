import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./NavigationButton.scss";

type PropsT = {
  to: string;
  className: string;
  children: string;
  bounce: boolean;
  onMouseOver: any;
  onMouseOut: any;
};

const NavigationButton = ({
  to,
  className,
  bounce,
  onMouseOver,
  onMouseOut,
  children,
}: PropsT) => {
  return (
    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Link to={to} className={className}>
        {children}
        <FontAwesomeIcon className={className} bounce={bounce} icon={faPaw} />
      </Link>
    </div>
  );
};

export default NavigationButton;
