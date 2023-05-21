import React, { useState } from "react";
import "./Login.scss";
import tryLogin from "../../helpers_function/tryLogin";
import useLoggedIn from "../../helpers_hooks/useLoggedIn";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoddegIn, setIsLoggedIn } = useLoggedIn();
  const navigate = useNavigate();
  const time = new Date();

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
    <div className="login">
      <div className="border">
        {isLoddegIn ? (
          <>
            <h2>You are still logged in!</h2>
            <button type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2>Log In</h2>
            <form method="post" onSubmit={handleLogIn}>
              <label htmlFor="email">Usename</label>
              <input
                type="text"
                name="email"
                placeholder="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button type="submit">Log In</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
