import React from "react";
import PropTypes from "prop-types";
import * as variables from "../../service/variables";
import FilmCard from "../FilmCard";
import "./filmList.scss"

const FilmsList = ({ films }) => (
  <ul className="list">
    {films.map(({ id, title, poster_path: posterPath }) => (
      <li key={id} className="listItem">
        <FilmCard
          poster={
            posterPath
              ? `${variables.imageBaseUrl}500${posterPath}`
              : variables.posterDummy
          }
          title={title}
          id={id}
        />
      </li>
    ))}
  </ul >
);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmsList;
