import React from "react";
import "./Navigation.scss";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { navLinksT } from "../../links";

function Navigation() {
  const { links }: any = useLoaderData();

  return (
    <div>
      <nav>
        <div className="container">
          <ul>
            {links.map((link: navLinksT) => {
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
