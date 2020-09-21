import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmId } from "../../Services/moviesApi";

const MovieDetailsPage = ({ match }) => {
  const [details, setDetails] = useState({});

  const {
    title,
    poster_path,
    backdrop_path,
    budget,
    genres = [],
    runtime,
    revenue,
    popularity,
    tagline,
    status,
    homepage,
    original_title,
    overview,
    production_companies = [],
    production_countries = [],
    release_date,
    spoken_languages = [],
    vote_average,
    id,
  } = details;

  const { url } = match;
  const moviesId = Number(useParams().movieId);

  useEffect(() => {
    getFilmId(moviesId).then((response) => setDetails(response.data));
  }, []);

  return (
    <div>
      <h1>{details && title}</h1>
    </div>
  );
};

export default MovieDetailsPage;
