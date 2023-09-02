import React, { useState } from "react";
import styles from "./Login.module.scss";
import tryLogin from "../../helpers_function/tryLogin";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useAppSelector } from "../../redux/reduxHooks";
import { PathsT } from "../../paths";
import Button from "../../components/Button/Button";

const Login: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  const location = useLocation();
  const backwardsPathFromLogin = location.pathname.replaceAll("login", "");
  const navigate = useNavigate();
  const time = new Date();
  const className = { [styles.darkMode]: isDarkMode };

  const handleLogIn = async (event: React.FormEvent) => {
    event?.preventDefault();

    if (username !== "" && password !== "") {
      const response = await tryLogin({ username, password });

      if (response.status === 200) {
        const timeOfSetAccessToken = time.getTime();
        const blogLogin = {
          accessToken: response.data.access_token,
          accessTokenTime: timeOfSetAccessToken,
        };

        const blogLoginJSON = JSON.stringify(blogLogin);
        setIsLoggedIn(true);
        await sessionStorage.setItem("blogLoginJSON", blogLoginJSON);
        navigate(`/${PathsT.MyArticlesPathT}`);
      }
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("blogLoginJSON");
    navigate(PathsT.HomePathT);
  };

  return (
    <div className={classNames(styles.login, className)}>
      <div className={styles.border}>
        {isLoddegIn ? (
          <>
            <h2 className={styles.headline2}>You are still logged in!</h2>
            <Button
              path={backwardsPathFromLogin}
              style={{ position: "absolute", bottom: "0", left: "0" }}
              type="submit"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleLogOut}
              style={{ position: "absolute", bottom: "0", right: "0" }}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <h2 className={styles.headline2}>Log In</h2>
            <form
              data-cy="login-form"
              className={styles.form}
              method="post"
              onSubmit={handleLogIn}
            >
              <label className={styles.label} htmlFor="email">
                Usename
              </label>
              <input
                data-cy="email-input"
                className={styles.input}
                id="email"
                type="text"
                name="email"
                placeholder="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="on"
              />

              <label htmlFor="password">Password</label>
              <input
                data-cy="password-input"
                className={styles.input}
                id="password"
                type="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="on"
                required
              />
              <Button
                path={backwardsPathFromLogin}
                style={{ position: "absolute", bottom: "0", left: "0" }}
                type="submit"
              >
                Cancel
              </Button>
              <Button
                data-cy="submit"
                style={{ position: "absolute", bottom: "0", right: "0" }}
                type="submit"
              >
                Log In
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
