import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsReviews } from "../../Services/moviesApi";

const ReviewsComp = () => {
  const [details, setDetails] = useState([]);
  const moviesId = Number(useParams().movieId);

  useEffect(() => {
    getFilmsReviews(moviesId).then((response) =>
      setDetails(response.data.results)
    );
  }, [moviesId]);
  return (
    <>
      {details.length > 0 ? (
        <ul>
          {details.map((el) => (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h5>We don't have any reviews for this movie</h5>
      )}
    </>
  );
};

export default ReviewsComp;
