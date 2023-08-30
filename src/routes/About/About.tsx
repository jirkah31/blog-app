import React from "react";
import { Outlet } from "react-router-dom";
import useRouterContext from "../../helpers_hooks/useRouterContext";

const About: React.FC = () => {
  const { isLoddegIn, setIsLoggedIn } = useRouterContext();
  return (
    <>
      <h1>About page is under construction! </h1>
      <Outlet context={{ isLoddegIn, setIsLoggedIn }} />
    </>
  );
};

export default About;
