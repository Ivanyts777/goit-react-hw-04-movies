import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./MoviesItem.module.css";
import routers from "../../routes";

const MoviesItem = ({
  poster_path,
  backdrop_path,
  id,
  title,
  adult,
  original_name,
}) => {
  const history = useHistory();
  const redirectToMoviePage = () => {
    history.push(`${routers.movies}/${id}`);
  };
  // className={styles.movie__list}
  return (
    <li
      className={styles.movie__listItem}
      key={id}
      onClick={redirectToMoviePage}
    >
      <img
        className={styles.movie__img}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      {title || original_name}
    </li>
  );
};

export default MoviesItem;
