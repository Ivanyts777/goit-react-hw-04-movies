import React, { Component } from "react";
import SerchBox from "../../Components/SearchBox/SearchBox";
import parseQueryString from "../../utils/parseQueryString";
import moviesApi from "../../Services/moviesApi";
import styles from "./MoviesPage.module.css";
import MoviesItem from "../../Components/moviesItem/MoviesItem";

class MoviesPage extends Component {
  state = {
    movies: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    const { query } = parseQueryString(this.props.location.search);
    if (query) {
      moviesApi
        .getFilmsFromQuery(query)
        .then((movies) => this.setState({ movies: movies }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQueryString(prevProps.location.search);
    const { query: nextQuery } = parseQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      moviesApi
        .getFilmsFromQuery(nextQuery)
        .then((movies) => this.setState({ movies: movies }));
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SerchBox onSubmit={this.handleChangeQuery} />
        <ul className={styles.movie__list}>
          {movies.length > 0 &&
            movies.map((el) => <MoviesItem key={el.id} {...el} />)}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
