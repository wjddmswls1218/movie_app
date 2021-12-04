import React from "react";
import MovieBox from "./components/movieBox";

//API를 통해 외부에서 받아온 데이터
const movies = [
  {
    title: "SpiderMan - Home Coming",
    score: 8.4,
    poster:
      "https://image.aladin.co.kr/product/19971/74/cover500/f982635949_1.jpg",
  },

  {
    title: "Eternals",
    score: 5.2,
    poster:
      "https://img.cjnews.cj.net/wp-content/uploads/2021/10/ETERNALS-IMAX_PRESS_211028_01-725x1024.jpg",
  },
  {
    title: "Avengers - Eng Game",
    score: 9.3,
    poster:
      "https://img.etnews.com/photonews/1910/1232419_20191011155158_093_0001.jpg",
  },
  {
    title: "Thor - Rangnarok",
    score: 8.8,
    poster:
      "http://movie-img.yes24.com/NYes24/MOVIE//M48/M26/M00006482651_16551.jpg",
  },
  {
    title: "Black Widow",
    score: 8.8,
    poster: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/04/05/106244513.2.jpg",
  },
];

class App extends React.Component {
  //Virtual Movie Datums

  render() {
    return (
      <main className="main">
        <section className="content">
          {movies.map((movie) => {
            return <MovieBox movie={movie} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
