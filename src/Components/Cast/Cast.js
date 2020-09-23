import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsCast } from "../../Services/moviesApi";
import styles from "./Cast.module.css";

const Cast = () => {
  const [details, setDetails] = useState([]);
  const moviesId = Number(useParams().movieId);

  useEffect(() => {
    getFilmsCast(moviesId).then((response) => setDetails(response.data.cast));
  }, [moviesId]);

  return (
    <ul className={styles.cast}>
      {details.map((el) => (
        <li className={styles.cast__item} key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face${el.profile_path}`}
            alt={el.name}
            width="138"
            height="175"
          />
          <p>{el.name}</p>
          <p>{el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
