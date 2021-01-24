import React, { Component } from "react";
import * as fetchAPI from "../../service/moviesApi";
import { getParsedSearchQuery } from "../../service/utilities";
import FilmList from "../../components/FilmList";
import SearchForm from "../../components/SearchForm";

class MoviesPage extends Component {
  state = {
    query: "",
    films: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const searchQuery = getParsedSearchQuery(this.props);

    if (prevState.query !== this.state.query) {
      fetchAPI.fetchMoviesByName(searchQuery).then((response) => {
        this.setState({ films: response.results });
        this.setState({ total_results: response.total_results });
      });
    }
  }

  onSubmit = (data) => {
    const { history, location } = this.props;

    history.push({
      ...location.pathname,
      search: `query=${data}`,
    });
    this.setState({ query: data });
  };

  render() {
    const { films, total_results } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {films && total_results > 0 && <FilmList films={films} />}
        {total_results === 0 && <div>There's no such film. Please try again</div>}
      </>
    );
  }
}

export default MoviesPage;
