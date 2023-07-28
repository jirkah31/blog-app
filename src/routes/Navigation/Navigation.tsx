import React, { Dispatch, SetStateAction } from "react";
import "./Navigation.scss";
import { navLinks } from "../../links";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "../../components/ButtonTheme/ButtonTheme";
import classNames from "classnames";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { PathsT } from "../../paths";

type PropsT = {
  bounce: boolean;
  isLoddegIn: boolean;
  setBounce: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({
  bounce,
  isLoddegIn,
  setBounce,
}: PropsT): React.FunctionComponentElement<PropsT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const className = classNames("icon", { "dark-mode": isDarkMode });
  const onMouseOver = () => {
    setBounce(true);
  };

  const onMouseOut = () => {
    setBounce(false);
  };

  return (
    <nav className={classNames("navigation", { "dark-mode": isDarkMode })}>
      <div className="container">
        <ul className="nav-list">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <ButtonNavigation
                  bounce={bounce}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className={className}
                  path={link.path}
                >
                  {link.content}
                </ButtonNavigation>
              </li>
            );
          })}
          {isLoddegIn && (
            <li>
              <ButtonNavigation
                bounce={bounce}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                className={className}
                path={PathsT.MyArticlesPathT}
              >
                My articles
              </ButtonNavigation>
            </li>
          )}
          <li>
            <ButtonNavigation
              className={className}
              bounce={bounce}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              path={PathsT.LoginPathT}
            >
              {isLoddegIn ? "Log Out" : "Log In"}
            </ButtonNavigation>
          </li>
        </ul>

        <ThemeButton
          bounce={bounce}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className={className}
        />
      </div>
    </nav>
  );
};

export default Navigation;
