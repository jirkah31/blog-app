import React, { Dispatch, SetStateAction } from "react";
import "./Navigation.scss";
import { navLinks } from "../../links";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import classNames from "classnames";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";

type PropsT = {
  isDarkMode: boolean;
  bounce: boolean;
  isLoddegIn: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  setBounce: Dispatch<SetStateAction<boolean>>;
};

function Navigation({
  isDarkMode,
  bounce,
  isLoddegIn,
  setIsDarkMode,
  setBounce,
}: PropsT) {
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
                  to={link.path}
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
                to="/my-articles"
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
              to="/login"
            >
              {isLoddegIn ? "Log Out" : "Log In"}
            </ButtonNavigation>
          </li>
        </ul>

        <ThemeButton
          bounce={bounce}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          setIsDarkMode={setIsDarkMode}
          isDarkMode={!isDarkMode}
          className={className}
        />
      </div>
    </nav>
  );
}

export default Navigation;
