import React from "react";
import { useHistory, NavLink, useLocation } from "react-router-dom";
import styles from "./MoviesItem.module.css";
import routers from "../../routes";

const MoviesItem = ({ location, poster_path, id, title, original_name }) => {
  return (
    <>
      <li className={styles.movie__listItem} key={id}>
        <NavLink
          to={{
            pathname: `${"/"}moviesPage/${id}`,
            state: { from: location },
          }}
        >
          <img
            className={styles.movie__img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://difelabookstore.co.za/img/products/361316%20NoImage.png`
            }
            alt={title}
          />
        </NavLink>
        {title || original_name}
      </li>
    </>
  );
};

export default MoviesItem;
