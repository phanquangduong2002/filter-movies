import React, { useEffect, useState } from "react";
import FilterMovie from "./FilterMovie";
import Movie from "./Movie";

import "./App.css";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fdc8495ca1d88aa2aece76394d0245e0&language=en-US&page=3"
    );

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <FilterMovie
        popular={popular}
        setFiltered={setFiltered}
        active={active}
        setActive={setActive}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
