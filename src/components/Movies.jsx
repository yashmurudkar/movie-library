import React, { useEffect, useState } from "react";
import "../Movies.css";
import Movielist from "./Movielist";

function Movies({ search, setSelectedMovie }) {
  const removeSpace = (word) => {
    let str = "";
    str = word.trim();
    return str;
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://www.omdbapi.com/?s=${removeSpace(
    search
  )}&apikey=9d53487b`;

  const searchMovies = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json(response);
    setData(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="movies">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        data?.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <Movielist
                poster={movie.Poster}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                setSelectedMovie={setSelectedMovie}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Movies;
