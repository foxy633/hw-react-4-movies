import React, { Suspense, lazy } from "react";
import routes from "./routes";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";

const HomePage = lazy(
  () => import("./pages/HomePage") /* webpackChunkName: "homePage" */
);
const MoviesPage = lazy(
  () => import("./pages/MoviesPage") /* webpackChunkName: "moviesPage" */
);
const MoviesDetailsPage = lazy(
  () => import("./pages/MoviesDetailsPage") /* webpackChunkName: "moviesDetailsPage" */
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MoviesDetailsPage} />
        
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
