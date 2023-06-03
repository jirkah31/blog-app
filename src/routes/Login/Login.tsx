import React, { useState } from "react";
import "./Login.scss";
import tryLogin from "../../helpers_function/tryLogin";
import useRouterContext from "../../helpers_hooks/useRouterContext";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoddegIn, setIsLoggedIn, isDarkMode } = useRouterContext();
  const navigate = useNavigate();
  const time = new Date();
  const className = { "login-dark-mode": isDarkMode };

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
        sessionStorage.setItem("blogLoginJSON", blogLoginJSON);
        navigate("/my-articles");
      }
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("blogLoginJSON");
    navigate("/");
  };

  return (
    <div className={classNames("login", className)}>
      <div className="border">
        {isLoddegIn ? (
          <>
            <h2>You are still logged in!</h2>
            <button
              className="submit-button"
              type="button"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2>Log In</h2>
            <form method="post" onSubmit={handleLogIn}>
              <label htmlFor="email">Usename</label>
              <input
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
                id="password"
                type="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="on"
                required
              />
              <button className="submit-button" type="submit">
                Log In
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
