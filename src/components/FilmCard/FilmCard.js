import React from "react";
import PropTypes from "prop-types";
import routes from "../../routes";
import { Link, withRouter } from "react-router-dom";
import "./filmCard.scss";

const FilmCard = ({ poster, title, id, location }) => (
  <Link
    className="filmLink"
    to={{
      pathname: `${routes.movies}/${id}`,
      state: { from: location },
    }}
  >
    <div className="card">
      <img className="cardImage" src={poster} alt="movie poster" />
      <p className="cardTitle">{title}</p>
    </div>
  </Link>
);
FilmCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(FilmCard);
