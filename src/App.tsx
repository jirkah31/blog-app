import classNames from "classnames";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./routes/Navigation/Navigation";
import { useState, useEffect } from "react";
import { setDarkTheme } from "./features/darkTheme";
import { useAppDispatch, useAppSelector } from "./helpers_hooks/reduxHooks";
import { setAccessToken } from "./features/accessToken";

const App: React.FC = () => {
  const [isLoddegIn, setIsLoggedIn] = useState(false);
  const [bounce, setBounce] = useState(false);
  // const { accessToken } = useAppSelector((state) => state.accessToken.value);
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const dispatch = useAppDispatch();

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
        dispatch(setAccessToken({ accessToken: loginData.accessToken }));
      } else {
        sessionStorage.removeItem("blogLoginJSON");
        setIsLoggedIn(false);
        dispatch(setAccessToken({ accessToken: "" }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDataJSON, timeNow]);

  useEffect(() => {
    if (getDarkModeJSON) {
      const getDarkMode = JSON.parse(getDarkModeJSON);
      if (getDarkMode) {
        dispatch(setDarkTheme({ isDarkMode: getDarkMode }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDarkModeJSON]);

  return (
    <div className={classNames({ "main-dark-mode": isDarkMode })}>
      <Navigation
        setBounce={setBounce}
        isLoddegIn={isLoddegIn}
        bounce={bounce}
      />
      <div className="container">
        <Outlet
          context={{ isLoddegIn, setIsLoggedIn }}
          //Outlet context can be deleted after finishing redux store
        />
      </div>
      <ToastContainer className={classNames({ "dark-mode": isDarkMode })} />
    </div>
  );
};

export default App;
