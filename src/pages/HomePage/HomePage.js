import React, { Component } from "react";
import * as fetchAPI from "../../service/moviesApi";
import FilmList from "../../components/FilmList";
import "./homePage.scss";

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchAPI.fetchTrendingMovies().then((response) => {
      this.setState({ films: response });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1 className="homePage">Trending today</h1>
        {films && <FilmList films={films} />}
      </>
    );
  }
}
export default HomePage;
