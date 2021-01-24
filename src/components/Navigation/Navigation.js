import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => (
  <div className="navigationStyle">
    <ul className="wrapper">
      <li className="navItem">
        <NavLink
          to={routes.home}
          exact
          className="link"
          activeClassName="linkActive"
        >
          Home
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          to={routes.movies}
          className="link"
          activeClassName="linkActive"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
