import React, { useEffect, useState } from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { getFilmId } from "../../Services/moviesApi";
import Cast from "../../Components/Cast/Cast";
import ReviewsComp from "../../Components/ReviewsComp/ReviewsComp";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = ({ match }) => {
  const [details, setDetails] = useState({});
  const { title, poster_path, genres = [], overview, vote_average } = details;
  const { url } = match;
  const moviesId = Number(useParams().movieId);

  useEffect(() => {
    getFilmId(moviesId).then((response) => setDetails(response.data));
  }, [moviesId]);

  return (
    <>
      {details && (
        <div className={styles.film__info}>
          <div className={styles.film__poster}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
                  : `https://difelabookstore.co.za/img/products/361316%20NoImage.png`
              }
              alt={title}
              width="320"
              height="440"
            />
          </div>
          <div className={styles.film__details}>
            <h2>{title} </h2>
            <p>
              <span>Vote:</span> - {vote_average}
            </p>
            <h3>Overview:</h3>
            <p>{overview} </p>
            <h3>Genres:</h3>
            <p>{genres.map((el) => el.name).join(", ")} </p>
          </div>
        </div>
      )}
      <hr />
      <div className={styles.additional}>
        <h3>Additional information:</h3>
        <NavLink
          className={styles.additional__item}
          activeClassName={styles.additional__item_active}
          to={`${url}/cast`}
        >
          Cast
        </NavLink>
        <Route path={`${match.path}/cast`} component={Cast} />
        <NavLink
          className={styles.additional__item}
          activeClassName={styles.additional__item_active}
          to={`${url}/reviews`}
        >
          Reviews
        </NavLink>
        <Route path={`${match.path}/reviews`} component={ReviewsComp} />
      </div>
      <hr />
    </>
  );
};

export default MovieDetailsPage;
