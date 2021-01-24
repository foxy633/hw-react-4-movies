import React from "react";
import PropTypes from "prop-types";
import * as variables from "../../service/variables";
import "./movieDetailsInfo.scss";

const MovieDetailsInfo = ({ film, genres, onGoBack }) => {
  const {
    poster_path: posterPath,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
    revenue,
    overview,
    title,
  } = film;

  return (
    <div className="wrapper">
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      <div className="dataWrapper">
        <div className="imagesWrapper">
          <img
            className="poster"
            src={
              posterPath
                ? `${variables.imageBaseUrl}780${posterPath}`
                : variables.posterDummy
            }
            alt="poster"
          />
        </div>
        <div className="infoWrapper">
          <p className="filmTitle">
            <span className="boldText">
              {title} ({parseInt(releaseDate)})
            </span>
          </p>
          <p>
            Rating: <span className="boldText">{voteAverage}/10</span> from
            <span className="boldText"> {voteCount} </span>
            users
          </p>
          <p>Revenue: {revenue}$</p>
          <p>Overview: {overview}</p>
          <p>
            Genres:
            {genres &&
              genres.map(({ id, name }) => (
                <span key={id} className="genreStyle">
                  {name}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  film: PropTypes.object.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  onGoBack: PropTypes.func.isRequired,
};

export default MovieDetailsInfo;
