import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation/Navigation";
import { useState, useEffect } from "react";

const App = () => {
  const [isLoddegIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bounce, setBounce] = useState(false);
  const loginDataJSON = sessionStorage.getItem("blogLoginJSON");
  const getDarkModeJSON = localStorage.getItem("darkMode");
  const time = new Date();
  const timeNow = time.getTime();

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

  useEffect(() => {
    if (getDarkModeJSON) {
      const getDarkMode = JSON.parse(getDarkModeJSON);
      if (getDarkMode) {
        setIsDarkMode(getDarkMode);
      }
    }
  }, [getDarkModeJSON]);

  return (
    <div className={classNames({ "main-dark-mode": isDarkMode })}>
      <Navigation
        setBounce={setBounce}
        isLoddegIn={isLoddegIn}
        isDarkMode={isDarkMode}
        bounce={bounce}
        setIsDarkMode={setIsDarkMode}
      />
      <div className="container">
        <Outlet
          context={{ isLoddegIn, setIsLoggedIn, accessToken, isDarkMode }}
        />
      </div>
      <ToastContainer className={classNames({ "dark-mode": isDarkMode })} />
    </div>
  );
};

export default App;
