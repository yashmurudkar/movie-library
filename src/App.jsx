import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import Movies from "./components/Movies";
import Placeholder from "./components/Placeholder";
function App() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  return (
    <>
      <Navbar setSearch={setSearch} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}

      {search.length > 0 ? (
        <Movies
          search={search}
          setSelectedMovie={setSelectedMovie}
        />
      ) : (
        <Placeholder />
      )}
    </>
  );
}

export default App;
