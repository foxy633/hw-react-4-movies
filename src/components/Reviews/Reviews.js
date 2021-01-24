import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import * as fetchAPI from "../../service/moviesApi";
import "./reviews.scss"

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchAPI
      .fetchMovieReviews(movieId)
      .then((res) => this.setState({ reviews: res }));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className="wrapper">
        {reviews.length ? (
          reviews.map(({ author, content }) => (
            <li key={uuidv4()} className="reviewStyle">
              <p className="authorStyle">Author: {author}</p>
              <p>"{content}"</p>
            </li>
          ))
        ) : (
          <p className="noReviews">No reviews yet</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
