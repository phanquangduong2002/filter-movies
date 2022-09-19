import React, { useEffect } from "react";
import "./style.scss";

function FilterMovie({ popular, setFiltered, active, setActive }) {
  useEffect(() => {
    if (active === 0) {
      setFiltered(popular);
      return;
    }
    const moviesFilter = popular.filter((movie) =>
      movie.genre_ids.includes(active)
    );
    setFiltered(moviesFilter);
  }, [active]);

  return (
    <div className="filter-movie">
      <button
        className={active === 0 ? "active" : ""}
        onClick={() => setActive(0)}
      >
        All
      </button>
      <button
        className={active === 35 ? "active" : ""}
        onClick={() => setActive(35)}
      >
        Comedy
      </button>
      <button
        className={active === 28 ? "active" : ""}
        onClick={() => setActive(28)}
      >
        Action
      </button>
    </div>
  );
}

export default FilterMovie;
