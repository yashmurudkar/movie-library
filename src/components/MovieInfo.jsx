import React, { useEffect, useState } from "react";
import "../MovieInfo.css";

function MovieInfo({ selectedMovie, setSelectedMovie }) {
  const [movieInfoData, setMovieInfoData] = useState([]);

  const movieInfo = (movie) => {
    fetch(`https://www.omdbapi.com/?i=${movie}&apikey=9d53487b`)
      .then((res) => res.json())
      .then((data) => setMovieInfoData(data));
  };

  useEffect(() => {
    movieInfo(selectedMovie);
  }, [selectedMovie]);

  return (
    <div className="movieinfo__container">
      <img src={movieInfoData.Poster} alt="No Image Available" />
      <div className="movieinfo__info">
        <div className="movieinfo__title">{movieInfoData.Title}</div>
        <div className="movie__description">
          <div className="description__info">
            IMDB Rating: <span>{movieInfoData.imdbRating}</span>
          </div>
          <div className="description__info">
            Year: <span>{movieInfoData.Year}</span>
          </div>
          <div className="description__info">
            Language: <span>{movieInfoData.Language}</span>
          </div>
          <div className="description__info">
            Rated: <span>{movieInfoData.Rated}</span>
          </div>
          <div className="description__info">
            Released: <span>{movieInfoData.Released}</span>
          </div>
          <div className="description__info">
            Runtime: <span>{movieInfoData.Runtime}</span>
          </div>
          <div className="description__info">
            Genre: <span>{movieInfoData.Genre}</span>
          </div>
          <div className="description__info">
            Director: <span>{movieInfoData.Director}</span>
          </div>
          <div className="description__info">
            Actors: <span>{movieInfoData.Actors}</span>
          </div>
          <div className="description__info">
            Plot: <span>{movieInfoData.Plot}</span>
          </div>
        </div>
      </div>
      <span
        onClick={() => {
          setSelectedMovie("");
        }}
        style={{
          position: "relative",
          right: "40px",
          top: "20px",
          padding: "5px 10px",
          fontSize: "20px",
          color: "white",
          background: "black",
          borderRadius: "5px",
          height: "max-content",
          cursor: "pointer",
        }}
      >
        X
      </span>
    </div>
  );
}

export default MovieInfo;
