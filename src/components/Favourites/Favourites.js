import React from "react";

const Favourites = ({ favouritesList, removeFavourites }) => {
  return (
    <>
      <h1>Favoritos</h1>
      {favouritesList.map((data, key) => {
        return (
          <div>
            <h2>{data.Title}</h2>
            <img src={data.Poster} alt="Poster Pelicula" />
            <button
              onClick={() => {
                removeFavourites(data);
              }}
            >
              Remover
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Favourites;
