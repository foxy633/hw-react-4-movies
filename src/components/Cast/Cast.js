import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import * as fetchAPI from "../../service/moviesApi";
import * as variables from "../../service/variables";
import './cast.scss'

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchAPI.fetchMovieCredits(movieId).then((res) => {
      const castMarkdown = res.map(({ profile_path, name, character }) => (
        <li key={uuidv4()} className="card">
          <img
            src={
              profile_path
                ? `${variables.imageBaseUrl}200${profile_path}`
                : variables.actorPhotoDummy
            }
            alt="actor"
          />
          <p className="nameStyle">{name}</p>
          <p>{character}</p>
        </li>
      ));

      this.setState({ cast: castMarkdown });
    });
  }

  render() {
    return <ul className="cast">{this.state.cast}</ul>;
  }
}

export default Cast;
