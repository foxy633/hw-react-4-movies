import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import * as fetchAPI from "../../service/moviesApi";
import MovieDetailsInfo from "../../components/MovieDetailsInfo";
import Loading from "../../components/Loading";
import routes from "../../routes";
import "./moviesDetailsPage.scss";

const Cast = lazy(
  () => import("../../components/Cast") /* webpackChunkName: "cast" */
);
const Reviews = lazy(
  () => import("../../components/Reviews") /* webpackChunkName: "reviews" */
);

class MovieDetailsPage extends Component {
  state = { film: {}, from: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { state } = this.props.location;
    if (state) this.setState({ from: state.from });

    const { movieId } = this.props.match.params;

    fetchAPI
      .fetchMovieById(movieId)
      .then((response) => {
        this.setState({ film: response });
      })
      .finally(() => this.setState({ isLoading: false }));
  }
  handleGoBack = () => {
    const { history } = this.props;

    if (this.state.from) {
      const { pathname, search } = this.state.from;
      history.push(`${pathname}${search}`);
      return;
    }
    history.push(routes.home);
  };

  render() {
    const { film, isLoading } = this.state;
    const { url } = this.props.match;

    return (
      <>
          {!isLoading && (
            <MovieDetailsInfo
              film={film}
              genres={film.genres}
              onGoBack={this.handleGoBack}
            />
          )}
          <div className="linksWrapper">
            <NavLink
              className="link"
              activeClassName="linkActive"
              to={`${url}/cast`}
            >
              Cast
            </NavLink>
            <NavLink
              className="link"
              activeClassName="linkActive"
              to={`${url}/reviews`}
            >
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<Loading />}>
            <Route path={`${routes.cast}`} component={Cast} />
            <Route path={`${routes.reviews}`} component={Reviews} />
          </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
