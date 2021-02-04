import React, { useState } from "react";

const MovieList = ({ movieList = [], favourites, favouritesList }) => {
  // const [favourites, setFavourites] = useState([]);

  // const addFavourites = (data) => {
  //   const favouriteList = [...favourites, data];
  //   setFavourites(favouriteList);
  // };

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
                    favourites(data);
                  }}
                >
                  A favoritos
                </button>
                {/* <button
                  className="btn btn-secondary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={data.Title}
                >
                  Tooltip on top
                </button> */}
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
