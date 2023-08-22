import React, { useState } from "react";
import styles from "./Login.module.scss";
import tryLogin from "../../helpers_function/tryLogin";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { PathsT } from "../../paths";
import Button from "../../components/Button/Button";

const Login: React.FC = () => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
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
        navigate(PathsT.MyArticlesPathT);
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
            <Button type="button" onClick={handleLogOut}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <h2 className={styles.headline2}>Log In</h2>
            <form className={styles.form} method="post" onSubmit={handleLogIn}>
              <label className={styles.label} htmlFor="email">
                Usename
              </label>
              <input
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
