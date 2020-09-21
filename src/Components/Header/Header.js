import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigation__item}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
