import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import Favourites from "../Favourites/Favourites";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const fetchData = async () => {
    return await fetch(`https://www.omdbapi.com/?s=${search}&apikey=4b4ab6ac`)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.Search);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    const saveFavourites = JSON.parse(localStorage.getItem("Testter"));
    setFavourites(saveFavourites);
  }, []);

  const saveLocalStorage = (data) => {
    localStorage.setItem("Testter", JSON.stringify(data));
  };

  const addFavourites = (data) => {
    const favouriteList = [...favourites, data];
    setFavourites(favouriteList);
    saveLocalStorage(favouriteList);
  };

  const removeFavourites = (movie) => {
    const favouriteList = favourites.filter(
      (data) => data.imdbID !== movie.imdbID
    );
    setFavourites(favouriteList);
    saveLocalStorage(favouriteList);
  };

  return (
    <>
      <h1>Lista de Peliculas</h1>
      <SearchBar onSearch={setSearch} />
      <MovieList
        movieList={movieList}
        favourites={addFavourites}
        favouritesList={favourites}
      />
      <Favourites
        favouritesList={favourites}
        removeFavourites={removeFavourites}
      />
    </>
  );
};

export default SearchPage;
