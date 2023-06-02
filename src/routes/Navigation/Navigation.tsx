import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { Outlet } from "react-router-dom";
import { navLinks } from "../../links";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import classNames from "classnames";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

function Navigation() {
  const [isLoddegIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bounce, setBounce] = useState(false);
  const loginDataJSON = sessionStorage.getItem("blogLoginJSON");
  const time = new Date();
  const timeNow = time.getTime();
  const className = classNames("icon", { "dark-mode": isDarkMode });

  const onMouseOver = () => {
    setBounce(true);
  };

  const onMouseOut = () => {
    setBounce(false);
  };

  useEffect(() => {
    if (!!loginDataJSON) {
      const loginData = JSON.parse(loginDataJSON);
      const timeLimit = timeNow - loginData.accessTokenTime;

      if (timeLimit < 3600000) {
        setIsLoggedIn(true);
        setAccessToken(loginData.accessToken);
      } else {
        sessionStorage.removeItem("blogLoginJSON");
        setIsLoggedIn(false);
        setAccessToken("");
      }
    }
  }, [loginDataJSON, timeNow]);

  return (
    <div className={classNames({ "main-dark-mode": isDarkMode })}>
      <nav className={classNames("navigation", { "dark-mode": isDarkMode })}>
        <div className="container">
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavigationButton
                    bounce={bounce}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    className={className}
                    to={link.path}
                  >
                    {link.content}
                  </NavigationButton>
                </li>
              );
            })}
            {isLoddegIn && (
              <li>
                <NavigationButton
                  bounce={bounce}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className={className}
                  to="/my-articles"
                >
                  My articles
                </NavigationButton>
              </li>
            )}
            <li>
              <NavigationButton
                className={className}
                bounce={bounce}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                to="/login"
              >
                {isLoddegIn ? "Log Out" : "Log In"}
              </NavigationButton>
            </li>
          </ul>

          <ThemeButton
            bounce={bounce}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
            className={className}
          />
        </div>
      </nav>
      <div className="container">
        <Outlet
          context={{ isLoddegIn, setIsLoggedIn, accessToken, isDarkMode }}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navigation;
