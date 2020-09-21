import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import MoviesPage from "./Containers/MoviesPage/MoviesPage";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import MoviesDetailsPage from "./Containers/MovieDetailsPage/MovieDetailsPage";
import routes from "./routes";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <hr />
      <div className="container">
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieId} component={MoviesDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
