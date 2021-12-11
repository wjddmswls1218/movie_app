import React from "react";
import MovieBox from "./components/movieBox";
import axios from "axios";

//API를 통해 외부에서 받아온 데이터

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
    };
  }

  //Virtual Movie Datums
  _getMovieData = async () => {
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f468133ad08eef8c7a50210567d8a1b"
    );

    this.setState((prevState) => {
      return {
        movies: result.data.results,
      };
    });
  };

  componentDidMount() {
    this._getMovieData();
  }

  render() {
    return (
      <main className="main">
        <section className="content">
          {this.state.movies === null
            ? "LOADING"
            : this.state.movies.map((movie) => {
                return <MovieBox key={movie.id} movie={movie} />;
              })}
        </section>
      </main>
    );
  }
}

export default App;
