import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const MovieList = ({ movieList = [] }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (data) => {
    const favouriteList = [...favourites, data];
    setFavourites(favouriteList);
  };

  return (
    <>
      {movieList.map((data, key) => {
        if (data) {
          const poster = () => {
            if (data.Poster === "N/A") {
              return <p>No poster</p>;
            } else {
              return <img src={data.Poster} alt="Poster Pelicula" />;
            }
          };

          return (
            <div>
              <div key={data.imdbID} className="">
                <h1>{data.Title}</h1>
                {poster()}
                <button
                  onClick={() => {
                    addFavourites(data);
                  }}
                >
                  Consola ID & favoritos
                </button>
                <button
                  className="btn btn-secondary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={data.Title}
                >
                  Tooltip on top
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    favourites.map((data) => {
                      console.log(data.Title);
                    })
                  }
                >
                  Favoritos
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default MovieList;
