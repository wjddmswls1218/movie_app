import React from "react";

class MovieBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movieBox">
        <div className="movieBox__left">
          <img src={this.props.movie.poster} alt="poster" />
        </div>
        <div className="movieBox__right mr">
          <article className="mr__title">{this.props.movie.title}</article>
          <article className="mr__score">⭐️ {this.props.movie.score}</article>
          <article className="mr__summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            numquam quae aperiam laudantium rem vitae cumque excepturi
            quibusdam! Adipisci id facere, quibusdam illo recusandae natus
            impedit maiores molestiae perspiciatis totam.
          </article>
        </div>
      </div>
    );
  }
}
export default MovieBox;
