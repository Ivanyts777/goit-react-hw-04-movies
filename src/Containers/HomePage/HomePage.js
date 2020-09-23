import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { getFilmsPopular } from "../../Services/moviesApi";
import styles from "./HomePage.module.css";
import MoviesItem from "../../Components/moviesItem/MoviesItem";

class HomePage extends Component {
  state = {
    movies: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    this.getFilmFromApi();
  }

  getFilmFromApi = async () => {
    try {
      this.errorToogle(false);
      const result = await getFilmsPopular();
      await this.setState({ movies: result });
    } catch (error) {
      this.errorToogle(true);
    } finally {
      this.loaderToogle(false);
    }
  };

  loaderToogle = (status) => {
    this.setState({
      loader: status,
    });
  };

  errorToogle = (status) => {
    this.setState({
      error: status,
    });
  };

  render() {
    const { movies, error, loader } = this.state;
    return (
      <div className={styles.homePage}>
        {error && <h1>Some error</h1>}
        {loader && (
          <Loader type="Puff" color="#00BFFF" height={80} width={80} />
        )}
        <ul className={styles.movie__list}>
          {movies.map((el) => (
            <MoviesItem key={el.id} {...el} />
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
