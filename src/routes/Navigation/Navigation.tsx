import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import { Link, Outlet } from "react-router-dom";
import { navLinks } from "../../links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";

function Navigation() {
  const [isLoddegIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const loginDataJSON = sessionStorage.getItem("blogLoginJSON");
  const time = new Date();
  const timeNow = time.getTime();

  useEffect(() => {
    if (!!loginDataJSON) {
      const loginData = JSON.parse(loginDataJSON);
      const timeLimit = timeNow - loginData.accessTokenTime;
      console.log("timeLimit: ", timeLimit);

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
    <div>
      <nav>
        <div className="container">
          <ul>
            {navLinks.map((link: any) => {
              return (
                <li key={link.id}>
                  <Link to={link.path}>
                    {link.content}
                    <FontAwesomeIcon className="icon" icon={faPaw} />
                  </Link>
                </li>
              );
            })}
            {isLoddegIn && (
              <li>
                <Link to="/my-articles">
                  My articles
                  <FontAwesomeIcon className="icon" icon={faPaw} />
                </Link>
              </li>
            )}
            <li>
              <Link to="/login">
                {isLoddegIn ? "Log Out" : "Log In"}
                <FontAwesomeIcon className="icon" icon={faPaw} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Outlet context={{ isLoddegIn, setIsLoggedIn, accessToken }} />
      </div>
    </div>
  );
}

export default Navigation;
