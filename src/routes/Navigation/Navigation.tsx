import React from "react";
import "./Navigation.scss";
import { Link, Outlet } from "react-router-dom";
import { navLinks } from "../../links";

function Navigation() {

  return (
    <div>
      <nav>
        <div className="container">
          <ul>
            {navLinks.map((link: any) => {
              return (
              <li key={link.id}>
                <Link to={link.path}>{link.content}</Link>
              </li>
            )})}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
